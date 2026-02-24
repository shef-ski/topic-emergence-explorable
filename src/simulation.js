// this connects the model and the visualization. For each we have three categories of events
// 1. initialization, 2. update, 3. iteration
// this is used by index.js, e.g. to initialize the explorable

import {
    initialize as model_init,
    update as model_update,
    go as model_go,
    topics
} from "./model.js";
import {
    initialize as visual_init,
    update as visual_update,
    go as visual_go,
} from "./viz.js";

import * as plot_viz from "./plots.js";
import param from "./parameters.js";

let last_step_time = 0;

function iterate(display, plots, config) {
    // If we have already reached the limit, do nothing
    if (param.tick >= 3000) {
        return;
    }

    // MONOLITHIC EXECUTION LOOP
    // This runs all 3000 ticks as fast as the CPU allows,
    // bypassing the browser's framerate and the 'desire_ms_per_tick' logic.
    console.log("Starting high-speed batch simulation...");

    while (param.tick < 30000) {
        model_go();
    }

    console.log("Batch simulation complete at tick:", param.tick);
    // Note: The downloadCSV() call inside your model.go() 
    // will trigger automatically once param.tick hits 3000.
}

function initialize(display, plots, config) {
    model_init();
    visual_init(display, config);

    plot_viz.initialize(plots, config);

    visual_go(display, config);    // Draws the initial agents/topics in the main view
    plot_viz.go(plots, topics);

    // closure includes 'plots' now
    d3.timer(() => iterate(display, plots, config));
}

function update(display, config) {
    model_update();
    visual_update(display, config);
}

export { iterate, initialize, update };
