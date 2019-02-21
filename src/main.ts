import { wrapModuleLoad} from "./collection/shimmer";
import { Counter as Counter }  from "./collection/counter"

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

let clear;

function init(): void {
    const counter: counter = new Counter();

    clear = counter.clearMetric;
    wrapModuleLoad(counter);

    setInterval(() => {
        console.log("--------------------------------node-rps data------------------------------------------------");
        console.log({
            requestCount: counter.requestCount,
            responseCount: counter.responseCount,
            requsetCountInLastTime: counter.requsetCountInLastTime,
            responseCountInLastTime: counter.responseCountInLastTime,
            noRespsnseCount: counter.noResponseCount,
            RPS: counter.RPS,
            collectTime: counter.collectTime / 1000
        });
        console.log("--------------------------------node-rps data------------------------------------------------");
    }, counter.collectTime);
}

init();

export {clear}
