import * as d3 from "d3";
import param from "./parameters.js";

const WIDTH = 350;
const HEIGHT = 200;
const MARGIN = { top: 10, right: 10, bottom: 35, left: 35 };

const speechBubblePath = "M0-.415c-.276 0-.5.186-.5.415 0 .118.06.229.166.308l-.08.161c-.004.008-.002.019.005.025a.021.021 0 00.014.005c.004 0 .008-.001.012-.004l.176-.118c.066.025.136.038.209.038.276 0 .5-.186.5-.415S.276-.415 0-.415";

// Mutable scales
let X, Y;

const initialize = (container, config) => {
    container.selectAll("*").remove();

    X = d3.scaleLog()
        .domain([0.05, param.max_inherent_news_val])
        .range([MARGIN.left, WIDTH - MARGIN.right]);

    Y = d3.scaleLinear()
        .domain([0, 1])
        .range([HEIGHT - MARGIN.bottom, MARGIN.top]);

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
    const xStart = 0.05;
    const xEnd = 5;

    container.append("line")
        .attr("x1", X(xStart))
        .attr("y1", Y(0))
        .attr("x2", X(xEnd))
        .attr("y2", Y(1))
        .attr("stroke", "#ccc")
        .attr("stroke-dasharray", "4 4");

    // Labels
    const xLabelText = "Topic News Value (Log)";

    container.append("text")
        .attr("class", "x-axis-label")
        .attr("text-anchor", "middle")
        .attr("x", MARGIN.left + (WIDTH - MARGIN.left - MARGIN.right) / 2)
        .attr("y", HEIGHT - 5)
        .style("font-size", "14px")
        .style("font-family", "sans-serif")
        .style("fill", "#555")
        .text(xLabelText);

    container.append("text")
        .attr("class", "y-axis-label")
        .attr("text-anchor", "middle")
        .attr("transform", "rotate(-90)")
        .attr("y", 12)
        .attr("x", -(MARGIN.top + (HEIGHT - MARGIN.top - MARGIN.bottom) / 2))
        .style("font-size", "14px")
        .style("font-family", "sans-serif")
        .style("fill", "#555")
        .text("Topic Popularity");

    container.append("text")
        .attr("class", "gini-label")
        .attr("x", MARGIN.left + 15)
        .attr("y", MARGIN.top + 15)
        .style("font-size", "14px")
        .style("font-family", "sans-serif") // Matching other text style
        .style("fill", "#333")
        .text("Normalized Gini = 0.00");

    container.append("g").attr("class", "dots-layer");
};

const go = (container, data) => {
    if (!data) return;

    // --- 1. CALCULATE NORMALIZED GINI INDEX ---
    // Extract the "wealth" (attention) and sort ascending
    const values = data.map(d => d.network_news_val).sort((a, b) => a - b);
    const n = values.length;
    let gini = 0;

    if (n > 0) {
        const sum = d3.sum(values);

        // Only calculate if there is attention to distribute
        if (sum > 0) {
            let numerator = 0;
            // Standard Gini Formula: (2 * sum(i * xi)) / (n * sum(xi)) - (n+1)/n
            // Note: i is 1-based index
            for (let i = 0; i < n; i++) {
                numerator += (i + 1) * values[i];
            }

            const rawGini = (2 * numerator) / (n * sum) - (n + 1) / n;

            // Normalize for small N
            // Max Gini for N items is (N-1)/N (when one person has everything)
            const maxGini = (n - 1) / n;

            // Avoid division by zero for N=1
            gini = maxGini > 0 ? rawGini / maxGini : 0;
        }
    }

    // Ensure within bounds (fix floating point errors)
    gini = Math.max(0, Math.min(1, gini));

    container.select(".gini-label").text(`Normalized Gini = ${gini.toFixed(2)}`);


    // --- 2. DRAW TOPICS ---
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
        .attr("transform", d => {
            const val = Math.max(0.05, d.initial_news_val);
            return `translate(${X(val)}, ${Y(d.network_news_val)}) scale(20)`;
        })
        .style("fill-opacity", 1)
        .style("stroke-opacity", 1);
};

const update = (container, config) => { };

export { initialize, go, update };