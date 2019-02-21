"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reportRPS;
exports.reportRPS = reportRPS;
exports.reportRPS = reportRPS = function (counter) {
    return JSON.stringify({
        requestCount: counter.requestCount,
        responseCount: counter.responseCount,
        requsetCountInLastTime: counter.requsetCountInLastTime,
        responseCountInLastTime: counter.responseCountInLastTime,
        noRespsnseCount: counter.noResponseCount,
        RPS: counter.RPS,
        collectTime: counter.collectTime / 1000
    });
};
