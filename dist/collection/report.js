"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reportQPS;
exports.reportQPS = reportQPS;
exports.reportQPS = reportQPS = function (counter) {
    return JSON.stringify({
        requestCount: counter.requestCount,
        responseCount: counter.responseCount,
        requsetCountInLastTime: counter.requsetCountInLastTime,
        responseCountInLastTime: counter.responseCountInLastTime,
        noRespsnseCount: counter.noResponseCount,
        QPS: counter.noResponseCount,
        collectTime: counter.noResponseCount / 1000
    });
};
