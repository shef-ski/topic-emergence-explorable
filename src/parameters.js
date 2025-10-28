// this object defines the parameters of the model
// - constants
// - variables (connected to sliders) properties range and default
// - choices (connected to radios) properties choices and default
// - switches (connected to toggles) property default
// utils.js provides methods for extracting various types of parameters for later use

export default {
    dt: 1, // I think datetime, not used
    L: 100, // =length=width
    agentsize: 1.0,

    // define weights for the update function
    weight_similarity: 0.33, // for similarity between culture and frame
    weight_inherent_nv: 0.33, // for the inherent news value of a topic
    weight_network_nv: 0.33, // for the news value based on following

    // speed := number of steps per second
    speed: {
        range: [10, 28],
        default: 20,
    },

    // (formerly similarity_threshold)
    likelihood_to_switch: {
        range: [0.2, 0.7],
        default: 0.45,
    },

    // probability of forgetting a topic
    likelihood_to_forget: {
        range: [0, 0.88],
        default: 0.3,
    },

    number_of_agents: {
        choices: [400, 800, 1600],
        default: 1,
    },

    number_of_topics: {
        choices: [2, 5, 8],
        default: 1,
    },

    // culture and frame are either uniform (false) or normal (true)
    culture_is_normal: {
        default: true,
    },

    frame_is_normal: {
        default: false,
    },
};
