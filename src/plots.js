import * as d3 from "d3";

// Fixed Dimensions
const WIDTH = 350;
const HEIGHT = 200;
const MARGIN = { top: 10, right: 10, bottom: 20, left: 10 };

// The speech bubble path provided
const speechBubblePath = "M0-.415c-.276 0-.5.186-.5.415 0 .118.06.229.166.308l-.08.161c-.004.008-.002.019.005.025a.021.021 0 00.014.005c.004 0 .008-.001.012-.004l.176-.118c.066.025.136.038.209.038.276 0 .5-.186.5-.415S.276-.415 0-.415";

// Setup scales
const X = d3.scaleLog()
    .domain([0.05, 8])
    .range([MARGIN.left, WIDTH - MARGIN.right]);

const Y = d3.scaleLinear()
    .domain([0, 1])
    .range([HEIGHT - MARGIN.bottom, MARGIN.top]);

const initialize = (container, config) => {
    container.selectAll("*").remove();

    // Draw Axes
    const axisG = container.append("g").attr("class", "axes");

    axisG.append("line")
        .attr("x1", MARGIN.left)
        .attr("x2", WIDTH - MARGIN.right)
        .attr("y1", Y(0))
        .attr("y2", Y(0))
        .attr("stroke", "#333")
        .attr("stroke-width", 1);

    axisG.append("line")
        .attr("x1", MARGIN.left)
        .attr("x2", MARGIN.left)
        .attr("y1", Y(0))
        .attr("y2", Y(1))
        .attr("stroke", "#333")
        .attr("stroke-width", 1);

    // Diagonal "Merit Line"
    container.append("line")
        .attr("x1", X(0.05))
        .attr("y1", Y(0))
        .attr("x2", X(5))
        .attr("y2", Y(1))
        .attr("stroke", "#ccc")
        .attr("stroke-dasharray", "4 4");

    // Only one layer needed now
    container.append("g").attr("class", "dots-layer");
};

const go = (container, data) => {
    if (!data) return;

    // --- DRAW TOPICS (Bubbles) ---
    const dots = container.select(".dots-layer")
        .selectAll("path.dot")
        .data(data, d => d.id || d.index);

    // EXIT: Remove suddenly as requested
    dots.exit().remove();

    // ENTER
    const dotsEnter = dots.enter()
        .append("path")
        .attr("class", "dot")
        .attr("d", speechBubblePath)
        // Start small at the bottom
        .attr("transform", d => `translate(${X(Math.max(0.05, d.initial_news_val))}, ${Y(0)}) scale(0)`)
        .style("fill", d => d.color)
        .style("stroke", "black")
        // Keeps the border thin even when we scale up the bubble
        .style("vector-effect", "non-scaling-stroke")
        .style("stroke-width", "1px");

    // UPDATE
    dots.merge(dotsEnter)
        .transition().duration(50)
        .ease(d3.easeLinear)
        // Scale 20 makes them roughly radius 10px (since the path is ~0.8 to 1.0 units wide)
        .attr("transform", d => `translate(${X(Math.max(0.05, d.initial_news_val))}, ${Y(d.network_news_val)}) scale(20)`)
        .style("fill-opacity", 1) // Zero transparency
        .style("stroke-opacity", 1);
};

const update = (container, config) => { };

export { initialize, go, update };