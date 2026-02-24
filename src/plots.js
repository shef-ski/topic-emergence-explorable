import * as d3 from "d3";

const WIDTH = 220;
const HEIGHT = 180;
const RADIUS = Math.min(WIDTH, HEIGHT) / 2 - 20; // Radius of 80px

// Mutable D3 generators
let pie, arc;

const initialize = (container, config) => {
    // Clear any existing elements
    container.selectAll("*").remove();

    // Setup Pie and Arc generators
    pie = d3.pie()
        .value(d => Math.max(0.0001, d.network_news_val)) // Fallback to avoid division by zero
        .sort(null); // Do not sort: keeps colors/topics in a consistent clock-wise order

    arc = d3.arc()
        .innerRadius(0) // 0 makes it a pie chart, > 0 would make a donut chart
        .outerRadius(RADIUS);

    // Create a centered group for the Pie Chart slices
    container.append("g")
        .attr("class", "pie-chart")
        .attr("transform", `translate(${WIDTH / 2}, ${HEIGHT / 2 - 10})`); // Shifted up slightly to fit the text

    // Create the Gini label underneath
    container.append("text")
        .attr("class", "gini-label")
        .attr("x", WIDTH / 2)
        .attr("y", HEIGHT - 5) // At the very bottom
        .attr("text-anchor", "middle")
        .style("font-size", "14px")
        .style("font-family", "sans-serif")
        .style("fill", "#333")
        .text("Attention Inequality = 0.00");
};

const go = (container, data) => {
    if (!data) return;

    // --- 1. CALCULATE NORMALIZED GINI INDEX (Existing Logic) ---
    const values = data.map(d => d.network_news_val).sort((a, b) => a - b);
    const n = values.length;
    let gini = 0;

    if (n > 0) {
        const sum = d3.sum(values);
        if (sum > 0) {
            let numerator = 0;
            for (let i = 0; i < n; i++) {
                numerator += (i + 1) * values[i];
            }
            const rawGini = (2 * numerator) / (n * sum) - (n + 1) / n;
            const maxGini = (n - 1) / n;
            gini = maxGini > 0 ? rawGini / maxGini : 0;
        }
    }
    gini = Math.max(0, Math.min(1, gini));

    // Update label text
    container.select(".gini-label").text(`Attention Inequality = ${gini.toFixed(2)}`);


    // --- 2. UPDATE PIE CHART ---
    // Handle edge case where no one is following anything (e.g. tick 0)
    const sumAttention = d3.sum(data, d => d.network_news_val);
    if (sumAttention === 0) {
        pie.value(d => 1); // Equal slices temporarily
    } else {
        pie.value(d => d.network_news_val); // Actual shares
    }

    const pieData = pie(data);

    // Bind data to slices (using d.data.index as key so the same topic keeps the same visual slice)
    const slices = container.select(".pie-chart")
        .selectAll("path.slice")
        .data(pieData, d => d.data.index);

    // Remove old slices (e.g. if topic count parameter changes)
    slices.exit().remove();

    // Enter new slices
    const slicesEnter = slices.enter()
        .append("path")
        .attr("class", "slice")
        .style("stroke", "white")
        .style("stroke-width", "1.5px");

    // Update existing + new slices
    // Update existing + new slices instantly
    slices.merge(slicesEnter)
        .attr("d", arc)
        .style("fill", d => d.data.color);
    // Optional: you can apply the same fading logic used in viz.js to the pie chart
    // .style("fill-opacity", d => Math.max(0, 1 - (d.data.age_relative ** 2)));
};

const update = (container, config) => { };

export { initialize, go, update };