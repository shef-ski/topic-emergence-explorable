// This is the core module for the implementation of the visualization
// It's analogous to model.js in terms of its relation to other modules,
// e.g. it reads the parameters and provides initialize, go and update functions
// to simulation.js where they get bundled with the analogous functions in model.js
// the observables and variables exported in model.js, e.g. the quantities
// used for the actual visualizations are also imported to viz.js

import * as d3 from "d3";
import param from "./parameters.js";
import { agents, topics } from "./model.js";
import styles from "./styles.module.css";

const L = param.L;
const X = d3.scaleLinear().domain([0, L]);
const Y = d3.scaleLinear().domain([0, L]);

// the initialization function, this is bundled in simulation.js with the initialization of
// the model and effectively executed in index.js when the whole explorable is loaded
// typically here all the elements in the SVG or CANVAS element are set.

const initialize = (display, config) => {
    const W = config.display_size.width;
    const H = config.display_size.height;

    X.range([0, W]);
    Y.range([0, H]);

    display.selectAll("#origin").remove();

    const origin = display.append("g").attr("id", "origin");

    // --- visualize agents ---
    origin
        .selectAll(null)
        .data(agents)
        .enter()
        .append("circle")
        .attr("class", styles.node)
        .attr("cx", (d) => X(d.x))
        .attr("cy", (d) => Y(d.y))
        .attr("r", X(param.agentsize / 2))
        .style("fill", function (d) {
            return d.focussed_topic.color;
        })
        .style("stroke", "black") // Optional: Add a border to the circles
        .style("stroke-width", 0.4); // Optional: Border thickness

    // --- visualize topics ---
    origin
        .selectAll(null)
        .data(topics, (d) => d.index)
        .enter()
        .append("rect")
        .attr("class", styles.node)
        // The 'd' here is the individual agent object from the 'agents' array
        .attr("x", (d) => X(d.x) - X(d.size / 2))
        .attr("y", (d) => Y(d.y) - Y(d.size / 2))
        .attr("width", (d) => X(d.size))
        .attr("height", (d) => Y(d.size))
        .style("fill", function (d) {
            return d.color;
        })
        .style("stroke", "black")
        .style("stroke-width", function (d) {
            // Example: stroke width from 0.5px to 2.5px
            // 0.5 (base when initial_news_val is 0)
            // + initial_news_val * 2.0 (adds up to 2.0 when initial_news_val is 1)
            return 0.5 + d.initial_news_val * 2.0;
        });

    origin
        .selectAll(null)
        .data(topics, (d) => d.index)
        .enter()
        .append("text")
        .attr("class", "topic-label") // We'll use this class to update them
        .attr("x", (d) => X(d.x)) // Position at the topic's center x
        .attr("y", (d) => Y(d.y)) // Position at the topic's center y
        .attr("dy", ".35em") // Helper attribute for vertical centering
        .style("text-anchor", "middle") // Horizontal centering
        .style("font-size", "12px") // Your static font size
        .style("fill", "black") // Text color
        .style("stroke", "black") // Add a thin outline for readability
        .style("stroke-width", "0.7px")
        .style("paint-ordering", "stroke") // Makes outline appear "behind" fill
        .style("pointer-events", "none") // Prevents text from blocking mouse
        .text((d) => d.letter);
};

// the go function, this is bundled in simulation.js with the go function of
// the model, typically this is the iteration function of the model that
// is run in the explorable. It contains the code that updates the parts of the display
// panel as a function of the model quantities.

const go = (display, config) => {
    // --- Update agent positions ---
    display
        .selectAll("circle." + styles.node) // Select all agent circles by class
        .data(agents, (d) => d.index) // Re-bind the agents data using index as key
        .attr("cx", (d) => X(d.x)) // Update x-coordinate based on the agent's data
        .attr("cy", (d) => Y(d.y)) // Update y-coordinate based on the agent's data
        .style("fill", (d) => d.focussed_topic ? d.focussed_topic.color : "#888888");

    // --- Update topic sizes and positions ---
    display
        .selectAll("rect." + styles.node) // Select all topic rectangles
        .data(topics, (d) => d.index) // Bind updated data using the index as the key
        .attr("x", (d) => X(d.x) - X(d.size / 2)) // Update x position
        .attr("y", (d) => Y(d.y) - Y(d.size / 2)) // Update y position
        .attr("width", (d) => X(d.size)) // Update width based on size
        .attr("height", (d) => Y(d.size)); // Update height based on size

    display
        .selectAll(".topic-label") // Select the labels by their class
        .data(topics, (d) => d.index) // Re-bind data to ensure correct order
        .attr("x", (d) => X(d.x)) // Update x position (center)
        .attr("y", (d) => Y(d.y)); // Update y position (center)

};

// the update function is usually not required for running the explorable. Sometimes
// it makes sense to have it, e.g. to update the visualization, if a parameter is changed,
// e.g. a radio button is pressed, when the system is not running, e.g. when it is paused.

const update = (display, config) => {
    display
        .selectAll("circle." + styles.node)
        .style("fill", (d) =>
            param.color_by_heading.widget.value()
                ? d3.interpolateSinebow(d.theta / 2 / Math.PI)
                : "black",
        );
};

export { initialize, go, update };
