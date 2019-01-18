
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
    res.write(`
        requestCount: ${counter.requestCount}
        responseCount: ${counter.responseCount}
        requsetCountInLastTime: ${counter.requsetCountInLastTime}
        responseCountInLastTime: ${counter.responseCountInLastTime}
        noRespsnseCount: ${counter.noResponseCount}
        QPS: ${counter.noResponseCount}
        collectTime: ${counter.noResponseCount/1000}

    `);
    res.end();
}

export {reportQPS}