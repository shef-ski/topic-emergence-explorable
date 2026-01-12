// this is a module that contains most of the explorable specific code
// the "math" of the explorable, the model itself, without the elements
// of visualization which are done in viz.js

import param from "./parameters.js";
import { each, range, map, without, sample } from "lodash-es";
import { randn_bm, rand_exp } from "./utils";

const L = param.L; // grid size

const lambda = 1.5; // used for drawing from exponential distribution

const easing_factor = 0.1; // for smoother movement (see go() function)

var agents = [];
var topics = [];

const RELEVANCE_MULTIPLIER = 1000;  // influences how long a topic can stay relevant / young

const TOPIC_MIN_AGE = 80; // a topic below this age cannot die

const MIN_FOLLOW_TIME = 30;


// todo move elsewhere
const TOPIC_COLORS = [
    "#ffa007ff",
    "#005397ff",
    "#32CD32",
    "#FFD700",
    "#ff0000ff",
    "#e74ae2ff",
    "#20B2AA",
    "#794002ff",
];


const calculate_network_nv = (agents, topics) => {
    topics.forEach((topic) => {
        topic._incoming_links_count = 0;
    });
    agents.forEach((agent) => {
        if (agent.focussed_topic) {
            agent.focussed_topic._incoming_links_count++;
        }
    });
    topics.forEach((topic) => {
        topic.network_news_val = (topic._incoming_links_count / agents.length);
        topic.age_absolute++;
    });
};

// the initialization function, this is bundled in simulation.js with the initialization of
// the visualization and effectively executed in index.js when the whole explorable is loaded
const initialize = () => {
    // set/reset timer
    param.timer = {};
    param.tick = 0;

    // --- Make topics ---
    const N_topics =
        param.number_of_topics.choices[param.number_of_topics.widget.value()];
    const frame_is_polarized = param.frame_is_polarized.widget.value();
    const paddingFraction = 0.05; // Adjust for desired padding (10% on top and bottom)
    const available_height = L * (1 - 2 * paddingFraction);
    const y_spacing = available_height / (N_topics - 1); // Space evenly between topics

    topics = map(range(N_topics), (i) => {
        let frame = Math.random();
        if (frame_is_polarized) {
            // Push values toward 0 or 1
            // (2 * frame - 1)^3 maps [0,1] to [-1,1] with a curve, then back to [0,1]
            frame = 0.5 + 0.5 * Math.pow(2 * frame - 1, 3);
        }
        // Calculate the y position with even spacing and padding
        let y = L * paddingFraction + i * y_spacing;
        // Draw from exponential distribution for initial_news_val
        const initial_news_val = rand_exp(lambda);
        // const initial_news_val = randn_bm();
        return {
            index: i,
            x: L * frame,
            y: y,
            frame: frame,
            initial_news_val: initial_news_val,
            network_news_val: 0, // this is a dynamic parameter
            get size() {  // size equals the width (or length) of a square topic
                const N_topics = topics.length;  // topic number dynamically
                return (
                    (3.5 + ((1 / (N_topics + 1)) * (this.network_news_val ** 2) * 140))
                );
            },
            color: TOPIC_COLORS[i],      // Assign color from list

            age_absolute: 0,  // in seconds
            get max_relevance() {
                return Math.max(TOPIC_MIN_AGE, this.network_news_val * this.initial_news_val * RELEVANCE_MULTIPLIER);
            },
            get age_relative() {
                return this.age_absolute / this.max_relevance;
            },
        };
    });

    // --- Calculate initial Relevance Proportions of Topics ---
    const sum_of_all_max_relevance = topics.reduce((sum, topic) => {
        return sum + (topic.max_relevance || 0);
    }, 0);
    topics.forEach((topic) => {
        if (sum_of_all_max_relevance > 0) {
            topic.relevance_proportion = (topic.max_relevance || 0) / sum_of_all_max_relevance;
        } else {
            // Handle edge case (e.g., if all start at 0)
            topic.relevance_proportion = 1 / topics.length;
        }
    });

    // --- Make agents ----
    const N_agents =
        param.number_of_agents.choices[param.number_of_agents.widget.value()];
    const culture_is_polarized = param.culture_is_polarized.widget.value();

    agents = map(range(N_agents), (i) => {
        let culture = Math.random();
        if (culture_is_polarized) {
            // Square root/Power approach for sharper polarization
            if (culture < 0.5) {
                culture = 0.5 * Math.pow(culture * 2, 2); // Push toward 0
            } else {
                culture = 1 - 0.5 * Math.pow((1 - culture) * 2, 2); // Push toward 1
            }
        }
        // Each agent is initially attached to a random topic
        const initial_topic_idx = Math.floor(Math.random() * topics.length);
        return {
            index: i,
            culture: culture,
            x: L * culture, // x pos depends on culture for sorted viz
            y: L * Math.random(),
            focussed_topic: topics[initial_topic_idx],
            time_on_topic: 0
        };
    });

    // Compute initial network news values for every topic
    calculate_network_nv(agents, topics);
};

// "Rebirth" a topic if it has died (replace with one with new parameters)
const reinitialize_topic = (topic) => {
    const frame_is_polarized = param.frame_is_polarized.widget.value();

    let new_frame = Math.random();

    if (frame_is_polarized) {
        new_frame = 0.5 + 0.5 * Math.pow(2 * new_frame - 1, 3);
    }
    topic.frame = new_frame;
    topic.x = L * new_frame;

    // topic.initial_news_val = randn_bm();
    topic.initial_news_val = rand_exp(lambda);

    topic.network_news_val = 0;
    topic._incoming_links_count = 0;
    topic.age_absolute = 0;
};

const change_topic = (agent) => {
    // Get all topics except the agent's current one
    const otherTopics = without(topics, agent.focussed_topic);
    agent.focussed_topic = sample(otherTopics);  // Pick a random one
    agent.time_on_topic = 0;
};

// the go function, this is bundled in simulation.js with the go function of
// the visualization, typically this is the iteration function of the model that
// is run in the explorable.
const go = () => {

    // --- General Updates ---
    param.tick++; // not sure where/if this is used
    // Update the network news value of each topic
    calculate_network_nv(agents, topics);

    // --- Calculate Relevance Proportions ---
    // 1. Get the sum of all max_relevance values
    const sum_of_all_max_relevance = topics.reduce((sum, topic) => {
        // Use a fallback to prevent NaN if max_relevance is 0 or undefined
        return sum + (topic.max_relevance || 0);
    }, 0);
    // 2. Calculate and assign each topic's proportion
    topics.forEach((topic) => {
        if (sum_of_all_max_relevance > 0) {
            topic.relevance_proportion = (topic.max_relevance || 0) / sum_of_all_max_relevance;
        } else {
            // Handle edge case (e.g., at tick 0 or if all are 0)
            topic.relevance_proportion = 1 / topics.length;
        }
    });

    // --- Topic Death and Rebirth Logic ---
    let dead_topic_indices = []; // To track topics that just "died"


    for (const topic of topics) {
        if (topic.age_absolute > TOPIC_MIN_AGE && topic.age_relative > 0.99) {
            reinitialize_topic(topic);
            dead_topic_indices.push(topic.index);
            break; // exits the loop entirely (so no two topics die at the same time)
        }
    }

    // Make agents "forget" any topic that was just reborn and find new one
    if (dead_topic_indices.length > 0) {
        agents.forEach((agent) => {
            if (agent.focussed_topic &&
                dead_topic_indices.includes(agent.focussed_topic.index)) {
                change_topic(agent);
            }
        });
    }

    // --- Agent updates ---
    agents.forEach((agent) => {
        const current_topic = agent.focussed_topic;

        // If agent forgot topic last turn, assign a new random topic
        if (!current_topic) {
            change_topic(agent);
            return;
        }

        // Check for "evaluation-based" switch
        const alignment = (1 - Math.abs(agent.culture - current_topic.frame)) ** 1.5;

        // 1. Calculate the attachment score (your code is fine here)
        const current_topic_attachment =
            alignment * param.weight_alignment.widget.value() +
            current_topic.network_news_val * param.weight_network_nv +
            current_topic.initial_news_val * param.weight_inherent_nv -
            current_topic.age_relative * param.weight_age_punishment;

        // normalize threshold
        const positive_parameter_sum =
            param.weight_alignment.widget.value() +
            param.weight_network_nv +
            param.weight_inherent_nv;
        const switch_threshold = param.likelihood_to_switch.widget.value() * positive_parameter_sum;


        if (agent.time_on_topic > MIN_FOLLOW_TIME) {
            if (
                current_topic_attachment < switch_threshold
            ) {
                change_topic(agent);
                return;
            }
            // noise switching
            const p_switch_noise = randn_bm()
            if (p_switch_noise < 0.1) {
                change_topic(agent);
                return;
            }

        }

        // If agent did NOT switch and did NOT forget
        agent.time_on_topic++;

        // Agent movement
        if (agent.focussed_topic) {
            const N_topics = topics.length;
            const sigma = L / N_topics;
            const mu = agent.focussed_topic.y;
            let target_y;
            const dir = randn_bm();

            // Pick a target y-coordinate from N(mu, sigma) with account to direction
            if (dir < 0.5) {
                target_y = mu - randn_bm() * sigma;
            } else {
                target_y = mu + randn_bm() * sigma;
            }
            // Bound the target by the plot limits [0, L]
            target_y = Math.max(0, Math.min(L, target_y));

            // Move a fraction of the distance towards the target
            agent.y += (target_y - agent.y) * easing_factor;

        }

    });
};

// the update function is usually not required for running the explorable. Sometimes
// it makes sense to have it, e.g. to update the model, if a parameter is changed,
// e.g. a radio button is pressed.
const update = () => {
    each(agents, (x) => {
        x.active =
            x.index < param.number_of_agents.widget.value() ? true : false;
    });
};

// the three functions initialize, go and update are exported, also all variables
// that are required for the visualization
export { agents, topics, initialize, go, update };
