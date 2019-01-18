
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
    let QPS = {
        "requestCount": counter.requestCount,
        "addResponseCount": counter.addResponseCount,
        "QPS": counter.QPS,
        "noResponseCount": counter.noResponseCount,
        "responseCountInLastTime": counter.responseCountInLastTime,
        "requsetCountInLastTime": counter.requsetCountInLastTime,
        "collectTime": counter.collectTime,
    }
    res.write(JSON.stringify(QPS));
    res.end();
}

export {reportQPS}