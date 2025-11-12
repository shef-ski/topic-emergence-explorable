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

const RADIUS_BUDGET = 25;
const CENTER_RADIUS = 0;
const MIN_OUTER_RADIUS = 2;

// created using https://yqnn.github.io/svg-path-editor/ and template from https://www.svgviewer.dev/s/142432/chat-speech-bubble
const SPEECH_BUBBLE_PATH = "M0-.415c-.276 0-.5.186-.5.415 0 .118.06.229.166.308l-.08.161c-.004.008-.002.019.005.025a.021.021 0 00.014.005c.004 0 .008-.001.012-.004l.176-.118c.066.025.136.038.209.038.276 0 .5-.186.5-.415S.276-.415 0-.415";
const ELLIPSE_PATH = "M-0.5,0 A0.5,0.415 0 0 1 0.5,0 A0.5,0.415 0 0 1 -0.5,0 Z"



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

    // --- visualize topics ---
    // Define the total "budget" for all radii, scaled by the display
    const TOTAL_RADIUS_BUDGET = X(RADIUS_BUDGET);
    const CENTER_TOPIC_RADIUS = X(CENTER_RADIUS);
    const MIN_TOPIC_RADIUS = X(MIN_OUTER_RADIUS);

    const calculateOuterRadius = (d) => {
        const proportionalRadius = d.relevance_proportion * TOTAL_RADIUS_BUDGET;
        return Math.max(proportionalRadius, MIN_TOPIC_RADIUS);
    };

    // Create a <g> group for each topic
    const topicGroups = origin
        .selectAll("g.topic-group") // Select groups by a new class
        .data(topics, (d) => d.index)
        .enter()
        .append("g") // Create a <g> element for each topic
        .attr("class", "topic-group") // Assign class for updates
        // Position the group, all circles/text inside will be relative to (0,0)
        .attr("transform", (d) => `translate(${X(d.x)},${Y(d.y)})`);

    // 1. Outer (Relevance) Circle - Added first (bottom layer)
    topicGroups
        .append("path")
        .attr("class", "topic-relevance-circle")
        .attr("d", SPEECH_BUBBLE_PATH)
        .attr("transform", (d) => `scale(${calculateOuterRadius(d) + 1})`) // Scale it
        .style("fill", (d) => d.color)
        .style("vector-effect", "non-scaling-stroke") // The magic property
        .style("stroke-width", "2.1px") // Set your desired fixed width
        .style("stroke", "black"); // Default to having no border

    // 2. Inner (Age) Circle - Added second (middle layer)
    topicGroups
        .append("path")
        .attr("class", "topic-age-circle")
        .attr("d", SPEECH_BUBBLE_PATH)
        .attr("transform", (d) => `scale(${calculateOuterRadius(d) * Math.min(d.age_relative, 1.0)})`) // Scale it based on age
        .style("fill", "white");

    // 3. Center (Topic) Circle - Added third (top layer)
    topicGroups
        .append("circle")
        .attr("class", "topic-center-circle") // For updating
        .attr("r", CENTER_TOPIC_RADIUS)
        .style("fill", (d) => d.color)
        .style("stroke", "black")
        .style("stroke-width", "0.5px");


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
        .style("stroke", "black") // Add a border with certain thickness
        .style("stroke-width", 0.4);
};



// the go function, this is bundled in simulation.js with the go function of
// the model, typically this is the iteration function of the model that
// is run in the explorable. It contains the code that updates the parts of the display
// panel as a function of the model quantities.
const go = (display, config) => {
    const TOTAL_RADIUS_BUDGET = X(RADIUS_BUDGET);
    // Define the fixed radius for the center circle
    const MIN_TOPIC_RADIUS = X(MIN_OUTER_RADIUS);

    const calculateOuterRadius = (d) => {
        const proportionalRadius = d.relevance_proportion * TOTAL_RADIUS_BUDGET;
        return Math.max(proportionalRadius, MIN_TOPIC_RADIUS);
    };

    // --- Update agent positions ---
    display
        .selectAll("circle." + styles.node) // Select all agent circles by class
        .data(agents, (d) => d.index) // Re-bind the agents data using index as key
        .attr("cx", (d) => X(d.x)) // Update x-coordinate based on the agent's data
        .attr("cy", (d) => Y(d.y)) // Update y-coordinate based on the agent's data
        .style("fill", (d) => d.focussed_topic ? d.focussed_topic.color : "#888888");

    // 1. Update the main group position
    const topicGroups = display
        .selectAll("g.topic-group")
        .data(topics, (d) => d.index)
        .attr("transform", (d) => `translate(${X(d.x)},${Y(d.y)})`); // Move the whole group

    // 2. Update Outer (Relevance) Circle
    // We re-bind data just in case topics were reborn
    topicGroups
        .select(".topic-relevance-circle")
        .data(topics, (d) => d.index)
        .attr("transform", (d) => `scale(${calculateOuterRadius(d)})`) // Update scale
        .style("fill", (d) => d.color);

    // 3. Update Inner (Age) Circle
    topicGroups
        .select(".topic-age-circle")
        .data(topics, (d) => d.index)
        .attr("transform", (d) => `scale(${calculateOuterRadius(d) * Math.min(d.age_relative, 1.0)})`);

    // 4. Update Center (Topic) Circle
    topicGroups
        .select(".topic-center-circle")
        .data(topics, (d) => d.index)
        .style("fill", (d) => d.color); // Update color in case of rebirth
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
