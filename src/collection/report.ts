
interface counter {
    requestCount: number,
    addRequestCount: (addCount: number) => void,
    responseCount: number,
    addResponseCount: (addCount: number) => void,
    noResponseCount: number,
    RPS: number,
    responseCountInLastTime: number,
    requsetCountInLastTime: number,
    collectTime: number,
    startCollectTimer: () => any,
    clearCollectTimer: () => void,
    collect: () => void,
    clearMetric: () => void,
}

interface reportRPS {
    (counter: counter): void
}
let reportRPS: reportRPS;

reportRPS = function (counter) {
    return JSON.stringify({
    requestCount: counter.requestCount,
    responseCount: counter.responseCount,
    requsetCountInLastTime: counter.requsetCountInLastTime,
    responseCountInLastTime: counter.responseCountInLastTime,
    noRespsnseCount: counter.noResponseCount,
    RPS: counter.RPS,
    collectTime: counter.collectTime/1000});
}

export {reportRPS}