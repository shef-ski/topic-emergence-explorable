// this is just a collection of utility functions that are frequently used in some explorables

import * as d3 from "d3";
import {
    map,
    replace,
    capitalize,
    each,
    has,
    isBoolean,
    pickBy,
    toPairs,
} from "lodash-es";

const add_id_label = (x) =>
    map(toPairs(x), (d) => {
        d[1]["id"] = d[0];
        d[1]["label"] = replace(capitalize(d[0]), /_/g, " ");
    });

const toArray = (x) => map(toPairs(x), (d) => d[1]);

const add_widget = (p, w) => each(p, (v, i) => (v["widget"] = w[i]));

const get_variables = (p) => pickBy(p, (v) => has(v, "range"));
const get_booleans = (p) => pickBy(p, (v) => isBoolean(v.default));
const get_choices = (p) => pickBy(p, (v) => has(v, "choices"));

const deg2rad = d3
    .scaleLinear()
    .domain([0, 360])
    .range([0, 2 * Math.PI]);
const rad2deg = d3
    .scaleLinear()
    .range([0, 360])
    .domain([0, 2 * Math.PI]);

const dist = (a, b) => {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
};

// a function for generating drawing a from a normal distribution in [0, 1]
// mean is 0.5, variance I am not sure but something around 0.15 I assume.
// taken from here: https://stackoverflow.com/questions/25582882/javascript-math-random-normal-distribution-gaussian-bell-curve
function randn_bm() {
    let u = 0,
        v = 0;
    while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while (v === 0) v = Math.random();
    let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    num = num / 10.0 + 0.5; // Translate to 0 -> 1
    if (num > 1 || num < 0) return randn_bm(); // resample between 0 and 1
    return num;
}

export {
    toArray,
    add_id_label,
    add_widget,
    get_variables,
    get_booleans,
    get_choices,
    deg2rad,
    rad2deg,
    dist,
    randn_bm,
};
