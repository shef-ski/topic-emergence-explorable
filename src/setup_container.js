import * as d3 from "d3";
import * as widgets from "d3-widgets";

export default (container_id, config) => {

    // 1. Grid for the Bottom Controls (Sliders, etc)
    const grid_controls = widgets.grid(
        config.controls_size.width,
        300, // Height for bottom section
        config.controls_grid.nx,
        config.controls_grid.ny
    );

    // 2. New Tiny Grid for the Buttons (Top Left)
    const grid_buttons = widgets.grid(
        150, // Width of button area
        200, // Height of button area
        4,   // nx
        4    // ny
    );

    const container = d3
        .select("#" + container_id)
        .classed(config.id + " " + config.container_class, true);

    // --- LEFT COLUMN: Main Display ---
    const display = container
        .append("div")
        .attr("id", "display")
        .attr("class", "display-panel")
        .classed(config.display_class, true)
        .classed(config.debug_lattice, config.debug)
        .append(config.display_type)
        .attr("viewBox", `0 0 ${config.display_size.width} ${config.display_size.height}`)
        .style("width", "100%");


    // --- RIGHT COLUMN: Control Panel Wrapper ---
    const controlPanelDiv = container
        .append("div")
        .attr("id", "controls")
        .attr("class", "control-panel")
        .classed(config.controls_class, true)
        .classed(config.debug_lattice, config.debug)
        .style("display", "flex")
        .style("flex-direction", "column");


    // --- ROW 1: TOP (Buttons + Plot) ---
    const topRow = controlPanelDiv.append("div")
        .style("display", "flex")
        .style("flex-direction", "row")
        .style("width", "100%")
        .style("height", "200px") // Fixed height matching plot
        .style("margin-bottom", "10px");

    // 1a. Buttons (Top Left)
    const buttons = topRow.append("svg")
        .attr("id", "buttons")
        .attr("viewBox", "0 0 150 200")
        .style("width", "30%")
        .style("height", "100%");

    // 1b. Plot (Top Right)
    const plots = topRow.append("svg")
        .attr("id", "plots")
        .attr("viewBox", "0 0 350 200")
        .style("width", "70%")
        .style("height", "100%");


    // --- ROW 2: BOTTOM (Sliders/Widgets) ---
    const controls = controlPanelDiv
        .append("svg")
        .attr("viewBox", `0 0 ${config.controls_size.width} 300`)
        .style("width", "100%");
    //.style("flex-grow", "1"); // Fill remaining height


    // --- Borders & Debug ---
    if (config.controls_border) controlPanelDiv.style("border", config.controls_border);
    if (config.display_border) display.style("border", config.display_border);

    if (config.debug) {
        // Debug dots for bottom controls
        controls.selectAll(".debug-dot").data(grid_controls.points).enter().append("circle")
            .attr("r", 2).attr("transform", d => `translate(${d.x},${d.y})`).style("fill", "black");
        // Debug dots for buttons
        buttons.selectAll(".debug-dot").data(grid_buttons.points).enter().append("circle")
            .attr("r", 2).attr("transform", d => `translate(${d.x},${d.y})`).style("fill", "red");
    }

    // Return all separate SVGs and Grids
    return { display, plots, controls, buttons, grid_controls, grid_buttons };
};