// this is a module that contains most of the explorable specific code
// the "math" of the explorable, the model itself, without the elements
// of visualization which are done in viz.js

import param from "./parameters.js";
import { each, range, map, without, sample } from "lodash-es";
import { randn_bm, rand_exp_truncated, normal_random } from "./utils";

// todo organize parameters

const L = param.L; // grid size

const lambda = 1.5; // used for drawing from exponential distribution

const TOPIC_MIN_AGE = 180; // a topic below this age cannot die

const MIN_FOLLOW_TIME = 60;

const NOISE_SWITCH_THRESHOLD = 0.15;

const TOPIC_COLORS = [
    "#e74ae2ff",
    "#005397ff",
    "#32CD32",
    "#FFD700",
    "#ff0000ff",
    "#ffa007ff",
    "#20B2AA",
    "#794002ff",
];

var agents = [];
var topics = [];

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

    const paddingFraction = 1 / (2 * N_topics);
    const available_height = L * (1 - 2 * paddingFraction);
    const y_spacing = available_height / (N_topics - 1); // Space evenly between topics

    topics = map(range(N_topics), (i) => {
        let frame = Math.random();

        // Calculate the y position with even spacing and padding
        let y = L * paddingFraction + i * y_spacing;

        // Draw from exponential distribution for initial_news_val
        let initial_news_val = rand_exp_truncated(lambda, param.max_inherent_news_val);

        // Generate random relevance multiplier
        // todo make function
        let relevance_multiplier = Math.random() * (2800 - 2500) + 2500;

        return {
            index: i,
            generation: 0, // Track generation
            id: `t_${i}_g_0`, // Unique ID for D3 binding
            history: [], // For the comet trails
            x: L * frame,
            y: y,
            frame: frame,
            initial_news_val: initial_news_val,
            relevance_multiplier: relevance_multiplier,
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
                return Math.max(TOPIC_MIN_AGE, this.network_news_val * this.relevance_multiplier);
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

    // --- Make agents ---
    const N_agents =
        param.number_of_agents.choices[param.number_of_agents.widget.value()];
    const culture_is_polarized = param.society_is_polarized.widget.value();

    agents = map(range(N_agents), (i) => {
        let culture;
        if (culture_is_polarized) {
            // Two Normal distributions
            culture = Math.random() > 0.5 ? normal_random(0.15, 0.1) : normal_random(0.85, 0.1);
        }
        else {
            // Normal distribution
            culture = normal_random(0.5, 0.25);
        }
        culture = Math.max(0, Math.min(1, culture));  // 0-1 constraint
        // Each agent is initially attached to a random topic
        return {
            index: i,
            culture: culture,
            x: L * culture, // x pos depends on culture for sorted viz
            y: L * Math.random(),
            focussed_topic: null,
            time_on_topic: 0
        };
    });

    // Compute initial network news values for every topic
    calculate_network_nv(agents, topics);
};

// "Rebirth" a topic if it has died (replace with one with new parameters)
const reinitialize_topic = (topic) => {

    let new_frame = Math.random();
    topic.frame = new_frame;
    topic.x = L * new_frame;

    topic.frame = new_frame;
    topic.x = L * new_frame;

    topic.initial_news_val = rand_exp_truncated(lambda, param.max_inherent_news_val);
    topic.relevance_multiplier = Math.random() * (2800 - 2500) + 2500;

    topic.network_news_val = 0;
    topic._incoming_links_count = 0;
    topic.age_absolute = 0;

    topic.generation += 1;
    topic.id = `t_${topic.index}_g_${topic.generation}`; // New ID forces D3 to treat this as a new dot
    topic.history = []; // Clear the comet tail
};

const change_topic = (agent) => {
    // Get all topics except the agent's current one
    const otherTopics = agent.focussed_topic
        ? without(topics, agent.focussed_topic)
        : topics;

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

    const easing_factor = 0.1 * (topics.length / 8);

    // --- Agent updates ---
    agents.forEach((agent) => {

        const current_topic = agent.focussed_topic;

        // If agent forgot topic last turn, assign a new random topic
        if (!current_topic) {
            change_topic(agent);
            return;
        }

        /// Component 1: Alignment (Weighted), alignment in [-0.5, 0.5]
        const weidget_val_ideology = param.importance_of_ideology.widget.value()
        const weight_ideology = weidget_val_ideology > 1 ? weidget_val_ideology ** weidget_val_ideology : weidget_val_ideology
        const alignment = (0.3 - Math.abs(agent.culture - current_topic.frame));
        const weighted_alignment = alignment * weight_ideology;

        // Component 2: Popularity (Weighted)
        const weighted_network_nv = current_topic.network_news_val * topics.length * param.weight_network_nv;

        // Component 3: Inherent Value (Weighted)
        const weighted_inherent_nv = current_topic.initial_news_val * param.weight_inherent_nv;

        // Component 4: Age Punishment (Weighted)
        const weighted_age_punishment = (current_topic.age_relative) ** 2 * param.weight_age_punishment;

        const current_topic_attachment =
            weighted_alignment +
            weighted_network_nv +
            weighted_inherent_nv -
            weighted_age_punishment;

        // normalize threshold
        const positive_parameter_sum =
            0.2 * weight_ideology +  // factor in slightly
            param.weight_network_nv +
            param.weight_inherent_nv;
        const switch_threshold = param.likelihood_to_switch.widget.value() * positive_parameter_sum;

        // DEBUG PRINT FOR AGENT 0
        if (agent.index === 0 && param.tick % 60 === 0) { // Log once per ~second
            console.table({
                "Factor": ["Alignment", "Network News (Popularity)", "Inherent Value", "Age Punishment", "TOTAL ATTACHMENT"],
                "Value": [
                    weighted_alignment.toFixed(3),
                    weighted_network_nv.toFixed(3),
                    weighted_inherent_nv.toFixed(3),
                    `-${weighted_age_punishment.toFixed(3)}`,
                    current_topic_attachment.toFixed(3)
                ]
            });
            console.log(`Switch Threshold: ${switch_threshold.toFixed(3)}`);
            console.log(`weight_ideology: ${weight_ideology.toFixed(3)}`);
        }

        if (agent.time_on_topic > MIN_FOLLOW_TIME) {
            if (
                current_topic_attachment < switch_threshold
            ) {
                change_topic(agent);
                return;
            }

            // noise switching
            const noise_switching = param.noise_switching.widget.value();
            if (noise_switching) {
                if (randn_bm() < NOISE_SWITCH_THRESHOLD) {
                    change_topic(agent);
                    return;
                }
            }
        }

        // If agent did NOT switch and did NOT forget
        agent.time_on_topic++;

        if (agent.focussed_topic) {
            const N_topics = topics.length;
            const sigma = L / N_topics;
            const mu = agent.focussed_topic.y;

            // 1. First, calculate the shortest vector to the TOPIC CENTER (mu)
            let dy = mu - agent.y;

            // Robust Toroidal Wrap: ensures dy is between -50 and 50
            dy = dy - L * Math.round(dy / L);

            // 2. NOW add the noise ("Jiggling") to that stable vector
            // This prevents the "Antipode Jitter" where noise flips the 
            // direction of the shortest path calculation.
            const noise = randn_bm() * sigma;
            const dir = randn_bm(); // Reroll for direction (or reuse if preferred)

            if (dir < 0.5) {
                dy -= noise;
            } else {
                dy += noise;
            }

            // 3. Apply movement
            agent.y += dy * easing_factor;

            // 4. Wrap the agent's actual position so it stays inside the box
            if (agent.y < 0) agent.y += L;
            if (agent.y >= L) agent.y -= L;
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
