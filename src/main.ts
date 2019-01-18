import { wrapModuleLoad} from "./collection/shimmer";
import { Counter as Counter }  from "./collection/counter"
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

let clear;

function init(): void {
    const counter: counter = new Counter();

    clear = counter.clearMetric;
    wrapModuleLoad(counter);
}

init();

export {clear}
