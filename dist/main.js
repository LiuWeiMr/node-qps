"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shimmer_1 = require("./collection/shimmer");
var counter_1 = require("./collection/counter");
var clear;
exports.clear = clear;
function init() {
    var counter = new counter_1.Counter();
    exports.clear = clear = counter.clearMetric;
    shimmer_1.wrapModuleLoad(counter);
}
init();
