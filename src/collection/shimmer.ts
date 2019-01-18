import Module = require("module");

import {reportQPS} from "./app"

interface nodule{
    [key: string]: any
}

interface wrapFunc {
    (nodule: nodule, method: string, wrapper: (method: any) => any): any
}

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

interface unwrapFunc {
    (): void
}

interface wrapModuleLoad {
    (counter: counter): any
}

interface wrapHttp {
    (counter: counter, http: any): any
}

interface warpListener {
    (counter: counter, listener: any): any
}

interface addListenerWraper{
    (type: any, listener: warpListener): any
}

interface listener {
    (request: any , response: any): any
}

let wrapMethod: wrapFunc;

wrapMethod = function(nodule, method, wrapper) {
    const orginal = nodule[method];

    if (!orginal) return;
    if (orginal["__unwrap"]) return;

    let wraped = wrapper(orginal);
    // nodule[method] = 

    let __unwrap: unwrapFunc;

    __unwrap = function() {
        nodule[method] = orginal;
    }
    wraped["orginal"] = orginal;
    wraped["__unwrap"] = __unwrap;

    nodule[method] = wraped;
}

let wrapModuleLoad: wrapModuleLoad;

wrapModuleLoad = function(counter) {

    wrapMethod(Module, "_load", function _wrapModuleLoad(orginal) {
        return function load(file: any) {

            if (file === "http" || file === "https") {
                return wrapHttp(counter, orginal.call(this, file))
            } else {
                return orginal.apply(this, arguments);
            }
        }
    });
}

let wrapHttp: wrapHttp;

wrapHttp = function (counter, http) {
    wrapMethod(http.Server.prototype, "on", function(addListener) {

        let addListenerWraper: addListenerWraper;
        addListenerWraper = function (type, listener) {

            if (type === "request" && typeof listener === "function") {
                return addListener.call(this, type, warpListener(counter, listener));
            }

            return addListener.apply(this, arguments);
        }

        return addListenerWraper;
    });
    wrapMethod(http.Server.prototype, "addListener", function(addListener) {

        let addListenerWraper: addListenerWraper;
        addListenerWraper = function (type, listener) {

            if (type === "request" && typeof listener === "function") {
                return addListener.call(this, type, warpListener(counter, listener));
            }

            return addListener.apply(this, arguments);
        }

        return addListenerWraper;
    });

    return http;
}

let warpListener: warpListener;

warpListener = function(counter, listener) {
    
    let newListener: listener;

    newListener = function(request, response) {
        
        counter.addRequestCount(1);
        response.once('finish', function onResponseFinish() {
            counter.addResponseCount(1);
        });

        const url = request.originalUrl || request.url;
        const method = request.method;
        if (url === "/QPS" && method === "GET") {
            reportQPS(counter, response);
        }

        return listener.apply(this, arguments);
    }
    return newListener;
}

export {wrapMethod, wrapModuleLoad}