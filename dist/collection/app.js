"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reportQPS;
exports.reportQPS = reportQPS;
exports.reportQPS = reportQPS = function (counter, res) {
    res.write("\n        requestCount: " + counter.requestCount + "\n        responseCount: " + counter.responseCount + "\n        requsetCountInLastTime: " + counter.requsetCountInLastTime + "\n        responseCountInLastTime: " + counter.responseCountInLastTime + "\n        noRespsnseCount: " + counter.noResponseCount + "\n        QPS: " + counter.noResponseCount + "\n        collectTime: " + counter.noResponseCount / 1000 + "\n\n    ");
    res.end();
};
