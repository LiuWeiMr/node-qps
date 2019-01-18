"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reportQPS;
exports.reportQPS = reportQPS;
exports.reportQPS = reportQPS = function (counter, res) {
    var QPS = {
        "requestCount": counter.requestCount,
        "addResponseCount": counter.addResponseCount,
        "QPS": counter.QPS,
        "noResponseCount": counter.noResponseCount,
        "responseCountInLastTime": counter.responseCountInLastTime,
        "requsetCountInLastTime": counter.requsetCountInLastTime,
        "collectTime": counter.collectTime,
    };
    res.write(JSON.stringify(QPS));
    res.end();
};
