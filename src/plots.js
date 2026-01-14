import * as d3 from "d3";

// --- CHANGE 1: Update Height Dimensions ---
// Use a shorter height to save space in the control panel
const WIDTH = 350;
const HEIGHT = 200;
const MARGIN = { top: 10, right: 10, bottom: 20, left: 10 };

// Setup scales
// X-Axis: Log scale for Inherent News Value
const X = d3.scaleLog()
    .domain([0.05, 8])
    .range([MARGIN.left, WIDTH - MARGIN.right]);

// Y-Axis: Linear scale for Network News Value
const Y = d3.scaleLinear()
    .domain([0, 1])
    .range([HEIGHT - MARGIN.bottom, MARGIN.top]);

// Line generator for the comet tails
const lineGenerator = d3.line()
    .x(d => X(d.x)) // Uses the correct X scale
    .y(d => Y(d.y)) // Uses the correct Y scale
    .curve(d3.curveBasis);


let W, H;

const initialize = (container, config) => {

    // Clear previous
    container.selectAll("*").remove();

    // Draw Axes (Simplified, no text labels as requested)
    const axisG = container.append("g").attr("class", "axes");

    // X-Axis Line
    axisG.append("line")
        .attr("x1", MARGIN.left)
        .attr("x2", WIDTH - MARGIN.right)
        .attr("y1", Y(0))
        .attr("y2", Y(0))
        .attr("stroke", "#333")
        .attr("stroke-width", 1);

    // Y-Axis Line
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

    // Groups for layering
    container.append("g").attr("class", "tails-layer");
    container.append("g").attr("class", "dots-layer");
};

const go = (container, data) => {
    if (!data) return;

    // 1. Update History for Tails
    data.forEach(t => {
        if (typeof t.initial_news_val !== 'undefined' && typeof t.network_news_val !== 'undefined') {
            const safeInherent = Math.max(0.05, t.initial_news_val);
            if (!t.history) t.history = [];
            t.history.push({ x: safeInherent, y: t.network_news_val });
            if (t.history.length > 50) t.history.shift();
        }
    });

    // --- DRAW TAILS ---
    const tails = container.select(".tails-layer")
        .selectAll("path.tail")
        .data(data, d => d.id || d.index);

    tails.exit().remove();

    const tailsEnter = tails.enter()
        .append("path")
        .attr("class", "tail")
        .style("fill", "none")
        .style("stroke", d => d.color)
        .style("stroke-width", 2)
        .style("opacity", 0);

    tails.merge(tailsEnter)
        .attr("d", d => lineGenerator(d.history || []))
        .style("opacity", d => (1 - (d.age_relative || 0)) * 0.5);


    // --- DRAW DOTS ---
    const dots = container.select(".dots-layer")
        .selectAll("circle.dot")
        .data(topics, d => d.id || d.index);

    // EXIT
    dots.exit()
        .transition().duration(500)
        .style("opacity", 0)
        .attr("r", 0)
        .remove();

    // ENTER
    const dotsEnter = dots.enter()
        .append("circle")
        .attr("class", "dot")
        .attr("cx", d => X(Math.max(0.05, d.initial_news_val)))
        .attr("cy", d => Y(0)) // Start at bottom
        .attr("r", 0)
        .style("fill", d => d.color)
        .style("stroke", "white")
        .style("stroke-width", 1.5);

    // Enter Animation
    dotsEnter.transition().duration(500)
        .style("opacity", 1)
        .attr("r", 8); // Visible size

    // UPDATE
    dots.merge(dotsEnter)
        .transition().duration(50).ease(d3.easeLinear)
        .attr("cx", d => X(Math.max(0.05, d.initial_news_val)))
        .attr("cy", d => Y(d.network_news_val))
        .style("opacity", d => 1 - (d.age_relative || 0));
};

// Standard export
const update = (container, config) => { };

export { initialize, go, update };