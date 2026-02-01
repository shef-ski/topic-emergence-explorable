// this object defines the parameters of the model
// - constants
// - variables (connected to sliders) properties range and default
// - choices (connected to radios) properties choices and default
// - switches (connected to toggles) property default
// utils.js provides methods for extracting various types of parameters for later use

export default {
    dt: 1, // I think datetime, not used
    L: 100, // =length=width
    agentsize: 1.2,

    // define weights for the update function
    weight_inherent_nv: 0.3, // for the inherent news value of a topic
    weight_network_nv: 0.3, // for the news value based on following
    weight_age_punishment: 5, // older topics become less attractive

    weight_alignment: {
        range: [0, 30],
        default: 6,
    },

    // speed := number of steps per second
    speed: {
        range: [10, 70],
        default: 34,
    },

    // (formerly similarity_threshold)
    likelihood_to_switch: {
        range: [0.01, 0.7],
        default: 0.2,
    },

    number_of_agents: {
        choices: [100, 400, 1600],
        default: 1,
    },

    number_of_topics: {
        choices: [3, 5, 8],
        default: 1,
    },

    culture_is_polarized: {
        default: true,
    },

    use_exponential_dist: {
        default: true,
        label: "Exponential Dist."
    },
};
