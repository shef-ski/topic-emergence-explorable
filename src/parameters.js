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
    weight_inherent_nv: 1, // for the inherent news value of a topic
    weight_network_nv: 1, // for the news value based on following
    weight_age_punishment: 5, // older topics become less attractive

    importance_of_ideology: {
        range: [0, 9],
        default: 1,
    },

    max_inherent_news_val: 3.0,

    // speed := number of steps per second
    speed: 30,

    // (formerly similarity_threshold)
    likelihood_to_switch: {
        range: [0.0, 1.0],
        default: 0.3,
    },

    number_of_agents: {
        choices: [100, 500, 1500],
        default: 1,
    },

    number_of_topics: {
        choices: [3, 5, 8],
        default: 1,
    },

    culture_is_polarized: {
        default: true,
    },

    noise_switching: {
        default: true,
        label: "Exponential Dist."
    },
};
