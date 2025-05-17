// this connects the model and the visualization. For each we have three categories of events
// 1. initialization, 2. update, 3. iteration
// this is used by index.js, e.g. to initialize the explorable

import {
    initialize as model_init,
    update as model_update,
    go as model_go,
} from "./model.js";
import {
    initialize as visual_init,
    update as visual_update,
    go as visual_go,
} from "./viz.js";
import param from "./parameters.js";

let last_step_time = 0;

function iterate(display, config) {
    const current_time = performance.now(); // Get the current high-resolution time

    // Get the desired milliseconds per tick
    // Using this equation: 1000 / desire_ms_per_tick = speed = n_steps_per_sec
    const desire_ms_per_tick = 1000 / param.speed.widget.value();

    const elapsed_time = current_time - last_step_time;

    if (elapsed_time >= desire_ms_per_tick) {
        // Enough time has passed, so execute a simulation step

        // Adjust last_step_time to keep timing consistent,
        // subtracting the "overshoot" so the next interval starts from the "ideal" time.
        last_step_time = current_time - (elapsed_time % desire_ms_per_tick);

        model_go();
        visual_go(display, config);
    }
}

function initialize(display, config) {
    model_init();
    visual_init(display, config);
}

function update(display, config) {
    model_update();
    visual_update(display, config);
}

export { iterate, initialize, update };
