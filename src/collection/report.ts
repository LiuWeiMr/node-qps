
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
    (counter: counter): void
}
let reportQPS: reportQPS;

reportQPS = function (counter) {
    return JSON.stringify({
    requestCount: counter.requestCount,
    responseCount: counter.responseCount,
    requsetCountInLastTime: counter.requsetCountInLastTime,
    responseCountInLastTime: counter.responseCountInLastTime,
    noRespsnseCount: counter.noResponseCount,
    QPS: counter.noResponseCount,
    collectTime: counter.noResponseCount/1000});
}

export {reportQPS}