// the global properties of the explorable, widget geometries etc. depending on the choice and application
// you are free to define new variables and properties for later access and for setting up the explorable
// the only place this is needed is for setting up the interactions in setup_interactions.js and in
// controls.js

export default {
    widgets: {
        // Main control buttons
        playbutton_size: 120,
        playbutton_anchor: { x: 3, y: 2 },
        backbutton_anchor: { x: 4, y: 5 },
        resetbutton_anchor: { x: 2, y: 5 },

        // Sliders
        slider_size: 400,
        slider_show: true,
        slider_gap: 1.2,
        slider_anchor: { x: 1, y: 7 },

        // Text labels


        // Radio buttons for changing user and topic numbers
        radio_anchor: { x: 2.8, y: 10.3 },
        radio_size: 140,
        radio_orientation: "horizontal",
        radio_item_gap: 1.2,  // vertical gap
        radio_label_position: "right",
        radio_shape: "rect",

        // Toggles
        toggle_anchor: { x: 8.3, y: 10.3 },
        toggle_vertical_gap: 1.2,
        toggle_label_pos: "right",

    },
    simulation: {
        delay: 10,
    },
};
