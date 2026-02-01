// main.js — entry point for the explorable

import "./tailwind.css";

import defaultConfig from "./container_config.js";
import setup_container from "./setup_container.js";
import setup_interactions from "./setup_interactions.js";
import setup_controls from "./controls.js";
import { initialize as setup_simulation } from "./simulation.js";
import { go, setup as setup_all, reset as reset_all } from "./controls.js";
import meta from "virtual:meta";

function load(containerId, config = defaultConfig) {
    // Setup the container
    const container = setup_container(containerId, config);
    const display = container.display;
    const plots = container.plots;

    const controls_svg = container.controls; // Bottom part
    const buttons_svg = container.buttons;   // Top-left part
    const grid_controls = container.grid_controls;
    const grid_buttons = container.grid_buttons;


    // Initialize everything
    setup_controls(buttons_svg, controls_svg, grid_buttons, grid_controls);
    setup_interactions(display, plots, controls_svg, config);

    // changed
    setup_simulation(display, plots, config);


    // Return a clean instance API
    return {
        halt() {
            if (go.value() === 1) {
                go.press(controls);
            }
        },
        reset() {
            if (go.value() === 1) {
                go.press(controls);
            }
            reset_all.press(controls);
            setup_all.press(controls);
        },
        config,
        meta,
    };
}

export { load, defaultConfig as config, meta };
export default load;
