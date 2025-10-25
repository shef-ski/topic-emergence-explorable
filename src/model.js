// this is a module that contains most of the explorable specific code
// the "math" of the explorable, the model itself, without the elements
// of visualization which are done in viz.js

import param from "./parameters.js";
import { each, range, map, without, sample } from "lodash-es";
import { randn_bm } from "./utils";

const L = param.L;

var agents = [];
var topics = [];

const TOPIC_COLORS = [
    "#FF6347", // Tomato
    "#4682B4", // SteelBlue
    "#32CD32", // LimeGreen
    "#FFD700", // Gold
    "#6A5ACD", // SlateBlue
    "#DA70D6", // Orchid
    "#20B2AA", // LightSeaGreen
    "#c28a1aff",
];

const ALPHABET = ["A", "B", "C", "D", "E", "F", "G", "H"];


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
        topic.network_news_val = topic._incoming_links_count / agents.length;
    });
};

// the initialization function, this is bundled in simulation.js with the initialization of
// the visualization and effectively executed in index.js when the whole explorable is loaded
const initialize = () => {
    // set/reset timer
    param.timer = {};
    param.tick = 0;

    // --- make topics ---
    const N_topics =
        param.number_of_topics.choices[param.number_of_topics.widget.value()];
    const frame_is_normal = param.frame_is_normal.widget.value();
    const paddingFraction = 0.05; // Adjust for desired padding (10% on top and bottom)
    const available_height = L * (1 - 2 * paddingFraction);
    const y_spacing = available_height / (N_topics - 1); // Space evenly between topics

    topics = map(range(N_topics), (i) => {
        let frame;
        if (frame_is_normal === false) {
            frame = Math.random(); // Uniformly distributed between 0 and 1
        } else {
            frame = randn_bm(); // normal distribution
        }
        // Calculate the y position with even spacing and padding
        let y = L * paddingFraction + i * y_spacing;
        return {
            index: i,
            x: L * frame,
            y: y,
            frame: frame,
            initial_news_val: Math.random(),
            network_news_val: 0, // this is a dynamic parameter
            get size() {
                // let size depend on both news values and a constant
                return (
                    (this.initial_news_val +
                        N_topics * 0.5 * this.network_news_val +
                        0.8) **
                    2
                );
            },
            letter: ALPHABET[i],       // Assign letter from alphabet
            color: TOPIC_COLORS[i],      // Assign color from list
        };
    });

    // --- make agents ----
    const N_agents =
        param.number_of_agents.choices[param.number_of_agents.widget.value()];
    const culture_is_normal = param.culture_is_normal.widget.value();

    agents = map(range(N_agents), (i) => {
        let culture;
        if (culture_is_normal === false) {
            culture = Math.random(); // Uniformly distributed between 0 and 1
        } else {
            culture = randn_bm(); // normal distribution from custom function
        }
        // Each agent is initially attached to a random topic
        const initial_topic_idx = Math.floor(Math.random() * topics.length);
        return {
            index: i,
            culture: culture,
            x: L * culture, // x pos depends on culture for sorted viz
            y: L * Math.random(),
            focussed_topic: topics[initial_topic_idx],
        };
    });

    // Compute initial network news values for every topic
    calculate_network_nv(agents, topics);
};

const change_topic = (agent) => {
    // Get all topics except the agent's current one
    const otherTopics = without(topics, agent.focussed_topic);

    // Pick a random topic from the other available topics
    agent.focussed_topic = sample(otherTopics);
};

// the go function, this is bundled in simulation.js with the go function of
// the visualization, typically this is the iteration function of the model that
// is run in the explorable.
const go = () => {
    param.tick++; // not sure where/if this is used

    // --- update the network news value of each topic ---
    calculate_network_nv(agents, topics);

    agents.forEach((agent) => {
        const current_topic = agent.focussed_topic;

        // Switch to a different topic if previous one was forgotten
        if (!current_topic) {
            agent.focussed_topic = sample(topics);
            return; // Skip to the next agent
        }

        // --- (potentially) update the focussed topics of all agents ---
        // Calculate similarity to current topic
        const similarity = 1 - Math.abs(agent.culture - current_topic.frame);
        // Calculate evaluation score
        const current_topic_attachment =
            similarity * param.weight_similarity +
            current_topic.network_news_val * param.weight_network_nv +
            current_topic.initial_news_val * param.weight_inherent_nv;
        // Compare the evaluation with threshold value
        if (
            current_topic_attachment < param.likelihood_to_switch.widget.value()
        ) {
            change_topic(agent); // Call the function to change topic
        }

        // Simple forgetting mechanism
        const forgetting_probability = Math.random();
        if (
            forgetting_probability < param.likelihood_to_forget.widget.value()
        ) {
            agent.focussed_topic = null;
        }

        // Agents only move if they are still focused on a topic
        if (agent.focussed_topic) {
            const N_topics = topics.length;
            const sigma = L / N_topics;
            const mu = agent.focussed_topic.y;
            const step_size = 1.0;

            const dir = randn_bm()

            let target_y;

            // 1. Pick a target y-coordinate from Normal(mu, sigma)
            if (dir < 0.5) {
                target_y = mu - randn_bm() * sigma;
            } else {
                target_y = mu + randn_bm() * sigma;
            }

            // 2. Bound the target by the plot limits [0, L]
            target_y = Math.max(0, Math.min(L, target_y));

            // 3. Move one unit towards the target
            const diff = target_y - agent.y;

            if (Math.abs(diff) < step_size) {
                // If close, just snap to the target
                agent.y = target_y;
            } else {
                // Otherwise, move one step
                agent.y += Math.sign(diff) * step_size;
            }

            // Also ensure agent's y stays within bounds after the step
            agent.y = Math.max(0, Math.min(L, agent.y));
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
