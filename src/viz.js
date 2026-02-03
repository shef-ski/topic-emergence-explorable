import * as d3 from "d3";
import param from "./parameters.js";
import { agents, topics } from "./model.js";
import styles from "./styles.module.css";

const L = param.L;
const X = d3.scaleLinear().domain([0, L]);
const Y = d3.scaleLinear().domain([0, L]);

const TOPIC_SCALE = 40;

// created using https://yqnn.github.io/svg-path-editor/ and template from https://www.svgviewer.dev/s/142432/chat-speech-bubble
const speechBubblePath = "M0-.415c-.276 0-.5.186-.5.415 0 .118.06.229.166.308l-.08.161c-.004.008-.002.019.005.025a.021.021 0 00.014.005c.004 0 .008-.001.012-.004l.176-.118c.066.025.136.038.209.038.276 0 .5-.186.5-.415S.276-.415 0-.415";

const initialize = (display, config) => {
    const W = config.display_size.width;
    const H = config.display_size.height;

    X.range([0, W]);
    Y.range([0, H]);

    display.selectAll("#origin").remove();
    const origin = display.append("g").attr("id", "origin");

    // --- 1. VISUALIZE TOPICS ---
    const topicGroups = origin
        .selectAll("g.topic-group")
        .data(topics, (d) => d.index)
        .enter()
        .append("g")
        .attr("class", "topic-group")
        .attr("transform", (d) => `translate(${X(d.x)},${Y(d.y)}) scale(${TOPIC_SCALE})`);

    topicGroups
        .append("path")
        .attr("class", "topic-shape")
        .attr("d", speechBubblePath)
        .style("fill", (d) => d.color)
        .style("stroke", "black")
        // FIX: This prevents the border from scaling up with the TOPIC_SCALE
        .style("vector-effect", "non-scaling-stroke")
        .style("stroke-width", "1px")
        .style("fill-opacity", 1)
        .style("stroke-opacity", 1);

    // --- 2. VISUALIZE AGENTS ---
    origin
        .selectAll(null)
        .data(agents)
        .enter()
        .append("circle")
        .attr("class", `${styles.node} agent`)
        .attr("cx", (d) => X(d.x))
        .attr("cy", (d) => Y(d.y))
        .attr("r", X(param.agentsize / 2))
        .style("fill", (d) => d.focussed_topic ? d.focussed_topic.color : "#d2cdcd09")
        .style("stroke", "black")
        .style("stroke-width", 0.5)
        .style("stroke-opacity", 1);
};

const go = (display, config) => {

    // --- 1. UPDATE AGENTS ---
    display
        .selectAll(".agent")
        .data(agents, (d) => d.index)
        .attr("cx", (d) => X(d.x))
        .attr("cy", (d) => Y(d.y))
        .style("fill", (d) => d.focussed_topic ? d.focussed_topic.color : "#d2cdcd09")
        .style("fill-opacity", (d) => {
            if (d.focussed_topic) {
                // Ensure full linear transparency
                return Math.max(0, 1 - d.focussed_topic.age_relative);
            }
            return 1;
        });

    // --- 2. UPDATE TOPICS ---
    const topicGroups = display
        .selectAll("g.topic-group")
        .data(topics, (d) => d.index)
        .attr("transform", (d) => `translate(${X(d.x)},${Y(d.y)}) scale(${TOPIC_SCALE})`);

    topicGroups
        .select(".topic-shape")
        .style("fill", (d) => d.color)
        .style("fill-opacity", (d) => Math.max(0, 1 - d.age_relative))
        .style("stroke-opacity", (d) => Math.max(0, 1 - d.age_relative));
};

const update = (display, config) => {
    display
        .selectAll(".agent")
        .style("fill", (d) =>
            param.color_by_heading.widget.value()
                ? d3.interpolateSinebow(d.theta / 2 / Math.PI)
                : (d.focussed_topic ? d.focussed_topic.color : "black"),
        );
};

export { initialize, go, update };