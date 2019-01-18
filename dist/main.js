"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shimmer_1 = require("./collection/shimmer");
var counter_1 = require("./collection/counter");
function init() {
    var counter = new counter_1.Counter();
    shimmer_1.wrapModuleLoad(counter);
}
init();
