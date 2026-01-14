import * as d3 from "d3";
import * as widgets from "d3-widgets";

export default (container_id, config) => {
    const grid = widgets.grid(
        config.controls_size.width,
        config.controls_size.height,
        config.controls_grid.nx,
        config.controls_grid.ny,
    );

    const container = d3
        .select("#" + container_id)
        .classed(config.id + " " + config.container_class, true);

    // --- 1. LEFT COLUMN: Main Display ---
    const display = container
        .append("div")
        .attr("id", "display")
        .attr("class", "display-panel")
        .classed(config.display_class, true)
        .classed(config.debug_lattice, config.debug)
        .append(config.display_type)
        .attr(
            "width",
            config.display_type == "canvas" ? config.display_size.width : null,
        )
        .attr(
            "height",
            config.display_type == "canvas" ? config.display_size.height : null,
        )
        .attr(
            "viewBox",
            config.display_type == "canvas"
                ? null
                : "0 0 " +
                config.display_size.width +
                " " +
                config.display_size.height,
        )
        .style("width", "100%");


    // --- 2. RIGHT COLUMN: Control Panel Container ---
    const controlPanelDiv = container
        .append("div")
        .attr("id", "controls")
        .attr("class", "control-panel")
        .classed(config.controls_class, true)
        .classed(config.debug_lattice, config.debug)
        .style("display", "flex")           // Use flex to stack vertically
        .style("flex-direction", "column"); // Stack: Plot on top, Controls below

    // --- 2a. PLOT (Top of Right Column) ---
    const plots = controlPanelDiv
        .append("svg")
        .attr("id", "plots")
        // CHANGE: Use 200 height in viewBox to match plots.js
        .attr("viewBox", "0 0 350 200")
        .style("width", "100%")
        // CHANGE: Force height to be small (~30% of column or fixed px)
        .style("height", "200px")
        .style("flex-shrink", "0")
        .style("margin-bottom", "10px");


    // --- 2b. WIDGETS (Bottom of Right Column) ---
    // This is the SVG that d3-widgets will draw onto
    const controls = controlPanelDiv
        .append("svg")
        .attr(
            "viewBox",
            "0 0 " +
            config.controls_size.width +
            " " +
            config.controls_size.height,
        )
        .style("width", "100%")
    //.style("height", "100%"); // Allow it to fill remaining space

    // --- Borders & Debug ---
    if (
        typeof config.controls_border === "string" &&
        config.controls_border.length > 0
    ) {
        controlPanelDiv.style("border", config.controls_border);
    }

    if (
        typeof config.display_border === "string" &&
        config.display_border.length > 0
    ) {
        display.style("border", config.display_border);
    }

    if (config.debug) {
        controls
            .selectAll(null)
            .data(grid.points)
            .enter()
            .append("circle")
            .attr("r", 2)
            .attr("transform", (d) => "translate(" + d.x + "," + d.y + ")")
            .style("fill", "black");
    }

    // Return the specific SVGs for their respective modules
    return { display: display, plots: plots, controls: controls, grid: grid };
};
