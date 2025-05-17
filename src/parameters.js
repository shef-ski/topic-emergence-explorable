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
        range: [0.5, 7],
        default: 3,
    },

    // (formerly similarity_threshold)
    likelihood_to_switch: {
        range: [0.2, 1.2],
        default: 0.5,
    },

    // probability of forgetting a topic
    forgetting_threshold: {
        range: [0, 0.08],
        default: 0.04,
    },

    number_of_agents: {
        choices: [500, 1000, 1500],
        default: 1,
    },

    number_of_topics: {
        choices: [3, 5, 10],
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
