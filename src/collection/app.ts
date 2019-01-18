
interface counter {
    requestCount: number,
    addRequestCount: (addCount: number) => void,
    responseCount: number,
    addResponseCount: (addCount: number) => void,
    noResponseCount: number,
    QPS: number,
    responseCountInLastTime: number,
    requsetCountInLastTime: number,
    collectTime: number,
    startCollectTimer: () => any,
    clearCollectTimer: () => void,
    collect: () => void,
    clearMetric: () => void,
}

interface reportQPS {
    (counter: counter, res: any): void
}
let reportQPS: reportQPS;

reportQPS = function (counter, res) {
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write(`<!DOCTYPE HTML>
    <html>
    <head>
    </head>
    <body>
     
    <div style="vertical-align: middle;display: table-cell;">
        <p>requestCount（接收到请求数）: ${counter.requestCount}</p>
        <p>responseCount（响应请求数）: ${counter.responseCount}</p>
        <p>requsetCountInLastTime（${counter.collectTime/1000}秒内接收到请求数）: ${counter.requsetCountInLastTime}</p>
        <p>responseCountInLastTime（${counter.collectTime/1000}响应请求数）: ${counter.responseCountInLastTime}</p>
        <p>noRespsnseCount（待响应请求数）: ${counter.noResponseCount}</p>
        <p>QPS（每秒处理请求数）: ${counter.noResponseCount}</p>
        <p>collectTime（收集间隔，单位：秒）: ${counter.noResponseCount/1000}</p>
    </div>
    </body>
    </html>
    `);
    res.end();
}

export {reportQPS}