export default {
    widgets: {
        // --- BUTTONS (Top Left Container) ---
        // Coordinates relative to a small 4x4 grid
        playbutton_size: 100, // Slightly smaller to fit
        playbutton_anchor: { x: 1.8, y: 1.1 },
        backbutton_anchor: { x: 2.8, y: 2.7 },
        resetbutton_anchor: { x: 0.8, y: 2.7 },

        // --- SLIDERS (Bottom Container) ---
        // Coordinates relative to the main controls grid
        // Note: Y positions reset to near 0 since this is a new SVG
        slider_size: 450, // Adjusted width
        slider_show: true,
        slider_gap: 1.9,
        slider_anchor: { x: 0.35, y: 1.1 }, // Starts at top of bottom section

        // --- RADIO BUTTONS ---
        radio_anchor: { x: 2.3, y: 6.7 },
        radio_size: 140,
        radio_orientation: "horizontal",
        radio_item_gap: 1.5,
        radio_label_position: "right",
        radio_shape: "rect",

        // --- TOGGLES ---
        toggle_anchor: { x: 8, y: 6.7 },
        toggle_vertical_gap: 1.5,
        toggle_label_pos: "right",
    },
    simulation: {
        delay: 10,
    },
};