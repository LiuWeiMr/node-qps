"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reportQPS;
exports.reportQPS = reportQPS;
exports.reportQPS = reportQPS = function (counter, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("<!DOCTYPE HTML>\n    <html>\n    <head>\n    </head>\n    <body>\n     \n    <div style=\"vertical-align: middle;display: table-cell;\">\n        <p>requestCount\uFF08\u63A5\u6536\u5230\u8BF7\u6C42\u6570\uFF09: " + counter.requestCount + "</p>\n        <p>responseCount\uFF08\u54CD\u5E94\u8BF7\u6C42\u6570\uFF09: " + counter.responseCount + "</p>\n        <p>requsetCountInLastTime\uFF08" + counter.collectTime / 1000 + "\u79D2\u5185\u63A5\u6536\u5230\u8BF7\u6C42\u6570\uFF09: " + counter.requsetCountInLastTime + "</p>\n        <p>responseCountInLastTime\uFF08" + counter.collectTime / 1000 + "\u54CD\u5E94\u8BF7\u6C42\u6570\uFF09: " + counter.responseCountInLastTime + "</p>\n        <p>noRespsnseCount\uFF08\u5F85\u54CD\u5E94\u8BF7\u6C42\u6570\uFF09: " + counter.noResponseCount + "</p>\n        <p>QPS\uFF08\u6BCF\u79D2\u5904\u7406\u8BF7\u6C42\u6570\uFF09: " + counter.noResponseCount + "</p>\n        <p>collectTime\uFF08\u6536\u96C6\u95F4\u9694\uFF0C\u5355\u4F4D\uFF1A\u79D2\uFF09: " + counter.noResponseCount / 1000 + "</p>\n    </div>\n    </body>\n    </html>\n    ");
    res.end();
};
