import * as d3 from "d3";

// Fixed Dimensions
const WIDTH = 350;
const HEIGHT = 200;
const MARGIN = { top: 10, right: 10, bottom: 35, left: 35 };

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

    // Axis Labels
    container.append("text")
        .attr("class", "x-axis-label")
        .attr("text-anchor", "middle")
        .attr("x", MARGIN.left + (WIDTH - MARGIN.left - MARGIN.right) / 2)
        .attr("y", HEIGHT - 5)
        .style("font-size", "10px")
        .style("font-family", "sans-serif")
        .style("fill", "#555")
        .text("Inherent Value (Log)");

    container.append("text")
        .attr("class", "y-axis-label")
        .attr("text-anchor", "middle")
        .attr("transform", "rotate(-90)")
        .attr("y", 12)
        .attr("x", -(MARGIN.top + (HEIGHT - MARGIN.top - MARGIN.bottom) / 2))
        .style("font-size", "10px")
        .style("font-family", "sans-serif")
        .style("fill", "#555")
        .text("Network Value");

    // --- NEW: R^2 Label (Top Left) ---
    container.append("text")
        .attr("class", "r-squared-label")
        .attr("x", MARGIN.left + 15) // Indented slightly
        .attr("y", MARGIN.top + 15)  // Down slightly
        .style("font-size", "14px")
        .style("font-family", "monospace") // Monospace for numbers
        .style("font-weight", "bold")
        .style("fill", "#333")
        .text("R² = 0.00");

    // Layer for dots
    container.append("g").attr("class", "dots-layer");
};

const go = (container, data) => {
    if (!data) return;

    // --- 1. CALCULATE R^2 ---
    // We map data to the same space used for visualization: Log(X) vs Linear(Y)
    const points = data.map(d => ({
        // We must apply the same clamp (0.05) as the scale to avoid Math.log(0)
        x: Math.log(Math.max(0.05, d.initial_news_val)),
        y: d.network_news_val
    }));

    const n = points.length;
    let r_squared = 0;

    if (n > 1) {
        const x_mean = d3.mean(points, d => d.x);
        const y_mean = d3.mean(points, d => d.y);

        let num = 0;
        let den_x = 0;
        let den_y = 0;

        points.forEach(p => {
            const dx = p.x - x_mean;
            const dy = p.y - y_mean;
            num += dx * dy;
            den_x += dx * dx;
            den_y += dy * dy;
        });

        // Avoid division by zero if all points are identical
        if (den_x > 0 && den_y > 0) {
            const r = num / Math.sqrt(den_x * den_y);
            r_squared = r * r;
        }
    }

    // Update Label
    container.select(".r-squared-label")
        .text(`R² = ${r_squared.toFixed(2)}`);


    // --- 2. DRAW TOPICS (Bubbles) ---
    const dots = container.select(".dots-layer")
        .selectAll("path.dot")
        .data(data, d => d.id || d.index);

    dots.exit().remove();

    const dotsEnter = dots.enter()
        .append("path")
        .attr("class", "dot")
        .attr("d", speechBubblePath)
        .attr("transform", d => `translate(${X(Math.max(0.05, d.initial_news_val))}, ${Y(0)}) scale(0)`)
        .style("fill", d => d.color)
        .style("stroke", "black")
        .style("vector-effect", "non-scaling-stroke")
        .style("stroke-width", "1px");

    dots.merge(dotsEnter)
        .transition().duration(50)
        .ease(d3.easeLinear)
        .attr("transform", d => `translate(${X(Math.max(0.05, d.initial_news_val))}, ${Y(d.network_news_val)}) scale(20)`)
        .style("fill-opacity", 1)
        .style("stroke-opacity", 1);
};

const update = (container, config) => { };

export { initialize, go, update };