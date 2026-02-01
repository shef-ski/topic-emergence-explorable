import * as widgets from "d3-widgets";
import { range, map } from "lodash-es";
import cfg from "./config.js";
import parameters from "./parameters.js";
import { toArray, add_id_label, add_widget, get_variables, get_booleans, get_choices } from "./utils.js";

const variables = get_variables(parameters);
const booleans = get_booleans(parameters);
const choices = get_choices(parameters);

add_id_label(variables);
add_id_label(booleans);
add_id_label(choices);

const va = toArray(variables);
const bo = toArray(booleans);
const ch = toArray(choices);

// --- Widgets Definitions (Logic same as before) ---
const sliders = map(va, (v) => widgets.slider().id(v.id).label(v.label).range(v.range).value(v.default).size(cfg.widgets.slider_size));
const toggles = map(bo, (v) => widgets.toggle().id(v.id).label(v.label).value(v.default).labelposition(cfg.widgets.toggle_label_pos));
const radios = map(ch, (v) => widgets.radio().choices(v.choices).id(v.id).value(v.default).orientation(cfg.widgets.radio_orientation).labelposition(cfg.widgets.radio_label_position));

add_widget(va, sliders);
add_widget(bo, toggles);
add_widget(ch, radios);

const go = widgets.button().actions(["play", "pause"]);
const setup = widgets.button().actions(["back"]);
const reset = widgets.button().actions(["rewind"]);
const buttons = [go, setup, reset];

// --- MAIN EXPORT: Now accepts multiple containers/grids ---
export default (buttons_svg, controls_svg, grid_buttons, grid_controls) => {

    // 1. POSITION BUTTONS (Using grid_buttons)
    go.position(grid_buttons.position(cfg.widgets.playbutton_anchor.x, cfg.widgets.playbutton_anchor.y))
        .size(cfg.widgets.playbutton_size);

    reset.position(grid_buttons.position(cfg.widgets.backbutton_anchor.x, cfg.widgets.backbutton_anchor.y));
    setup.position(grid_buttons.position(cfg.widgets.resetbutton_anchor.x, cfg.widgets.resetbutton_anchor.y));

    // Render Buttons to Top-Left SVG
    buttons_svg.selectAll(null).data(buttons).enter().append(widgets.widget);


    // 2. POSITION SLIDERS (Using grid_controls)
    const sl_pos = grid_controls.position(
        cfg.widgets.slider_anchor.x,
        range(sliders.length).map(x => cfg.widgets.slider_anchor.y + cfg.widgets.slider_gap * x)
    );
    sliders.forEach((sl, i) => sl.position(sl_pos[i]));

    // 3. POSITION TOGGLES
    const tg_pos = range(toggles.length).map((i) => {
        return grid_controls.position(
            cfg.widgets.toggle_anchor.x,
            cfg.widgets.toggle_anchor.y + i * cfg.widgets.toggle_vertical_gap
        );
    });
    toggles.forEach((tg, i) => tg.position(tg_pos[i]));

    // 4. POSITION RADIOS
    const ch_pos = range(radios.length).map((i) =>
        grid_controls.position(
            cfg.widgets.radio_anchor.x,
            cfg.widgets.radio_anchor.y + i * cfg.widgets.radio_item_gap
        )
    );
    radios.forEach((radio, i) => {
        radio.position(ch_pos[i]).size(cfg.widgets.radio_size).shape(cfg.widgets.radio_shape);
    });

    // Render Everything else to Bottom SVG
    controls_svg.selectAll(null).data(sliders).enter().append(widgets.widget);
    controls_svg.selectAll(null).data(toggles).enter().append(widgets.widget);
    controls_svg.selectAll(null).data(radios).enter().append(widgets.widget);

    // Labels (Attached to bottom SVG)
    // Note: You might want to adjust positions manually or via config
    const label1Pos = grid_controls.position(0.5, 6.5);
    const label2Pos = grid_controls.position(0.5, 7.8);

    controls_svg.append("text").attr("x", label1Pos.x).attr("y", label1Pos.y).attr("class", "static-label").text("Agents:");
    controls_svg.append("text").attr("x", label2Pos.x).attr("y", label2Pos.y).attr("class", "static-label").text("Topics:");
};

export { sliders, toggles, radios, go, setup, reset, variables, booleans, choices };