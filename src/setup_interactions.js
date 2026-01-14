// here all functions are connected to the widgets, these functions can be defined here, like the
// startstop function connected to the go button, or they can be functions defined elsewhere,
// like the initialization functions, or reset parameter functions. Regardless, here
// all functions that need to be execuded for example if a controls element is modified, are connected
// to the update() method of an widget object. See below.

import { interval } from "d3";
import * as ct from "./controls.js";
import cfg from "./config.js";
import param from "./parameters.js";
import resetparameters from "./reset_parameters.js";
import { iterate, initialize, update } from "./simulation.js";

var timer = {};

// this defines a startstop simulation function that execute the function iterate() that is defined in simulation.js
// it also uses information defined in config.js, in this case the delay time between iteration steps.

const startstop = (display, plots, config) => {
    ct.go.value() == 1
        ? (timer = interval(
            () => iterate(display, plots, config), // Pass plots
            cfg.simulation.delay,
        ))
        : timer.stop();
};

// this function is called by index.js to connect actions and update functions to the explorables.
// once this is called, all widgets are usable in the controls panel

// CHANGE: Added 'plots' to arguments
export default (display, plots, controls, config) => {

    ct.reset.update(() => resetparameters(controls));

    // CHANGE: All calls to initialize/startstop must now include 'plots'
    ct.go.update(() => startstop(display, plots, config));
    ct.setup.update(() => initialize(display, plots, config));

    param.number_of_agents.widget.update(() => initialize(display, plots, config));
    param.number_of_topics.widget.update(() => initialize(display, plots, config));

    if (ct.toggles[0]) ct.toggles[0].update(() => initialize(display, plots, config));
    if (ct.toggles[1]) ct.toggles[1].update(() => initialize(display, plots, config));
};
