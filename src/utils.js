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
function rand_bm() {
    let u = 0,
        v = 0;
    while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while (v === 0) v = Math.random();
    let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    num = num / 10.0 + 0.5; // Translate to 0 -> 1
    if (num > 1 || num < 0) return rand_bm(); // resample between 0 and 1
    return num;
}

function rand_exp(lambda) {
    const u = 1.0 - Math.random(); // Get a random number in (0, 1]
    const exp_draw = -Math.log(u) / lambda;
    return exp_draw;
}

const rand_exp_truncated = (lambda, max_inherent_news_val) => {
    let val;
    // Keep drawing until we get a value within bounds
    do {
        val = rand_exp(lambda);
    } while (val > max_inherent_news_val
    );
    return val;
};

function rand_normal(mean, std) {
    let u = 1 - Math.random(); // Converting [0,1) to (0,1]
    let v = Math.random();
    let z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    return z * std + mean;
}

const calculateGini = (topicList) => {
    const values = topicList.map(t => t.network_news_val).sort((a, b) => a - b);
    const n = values.length;

    // Safety check for empty or single-item arrays
    if (n <= 1) return 0;

    // Use reduce for sum to avoid needing extra d3 imports in model.js
    const sum = values.reduce((acc, val) => acc + val, 0);

    // Only calculate if there is attention to distribute
    if (sum > 0) {
        let numerator = 0;
        // Standard Gini Formula: (2 * sum(i * xi)) / (n * sum(xi)) - (n+1)/n
        // Note: i is 0-based in loop, so we use (i + 1) for 1-based index
        for (let i = 0; i < n; i++) {
            numerator += (i + 1) * values[i];
        }

        const rawGini = (2 * numerator) / (n * sum) - (n + 1) / n;

        // Normalize for small N
        // Max Gini for N items is (N-1)/N (when one topic has everything)
        const maxGini = (n - 1) / n;

        // Apply normalization and clamp between 0 and 1
        let normalizedGini = maxGini > 0 ? rawGini / maxGini : 0;
        return Math.max(0, Math.min(1, normalizedGini));
    }

    return 0;
};

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
    rand_bm as randn_bm,
    rand_exp_truncated,
    rand_normal as normal_random,
    calculateGini
};
