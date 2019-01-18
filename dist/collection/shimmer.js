"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Module = require("module");
var app_1 = require("./app");
var wrapMethod;
exports.wrapMethod = wrapMethod;
exports.wrapMethod = wrapMethod = function (nodule, method, wrapper) {
    var orginal = nodule[method];
    if (!orginal)
        return;
    if (orginal["__unwrap"])
        return;
    var wraped = wrapper(orginal);
    // nodule[method] = 
    var __unwrap;
    __unwrap = function () {
        nodule[method] = orginal;
    };
    wraped["orginal"] = orginal;
    wraped["__unwrap"] = __unwrap;
    nodule[method] = wraped;
};
var wrapModuleLoad;
exports.wrapModuleLoad = wrapModuleLoad;
exports.wrapModuleLoad = wrapModuleLoad = function (counter) {
    wrapMethod(Module, "_load", function _wrapModuleLoad(orginal) {
        return function load(file) {
            if (file === "http" || file === "https") {
                return wrapHttp(counter, orginal.call(this, file));
            }
            else {
                return orginal.call(this, file);
            }
        };
    });
};
var wrapHttp;
wrapHttp = function (counter, http) {
    wrapMethod(http.Server.prototype, "on", function (addListener) {
        var addListenerWraper;
        addListenerWraper = function (type, listener) {
            if (type === "request" && typeof listener === "function") {
                return addListener.call(this, type, warpListener(counter, listener));
            }
            return addListener.apply(this, arguments);
        };
        return addListenerWraper;
    });
    wrapMethod(http.Server.prototype, "addListener", function (addListener) {
        var addListenerWraper;
        addListenerWraper = function (type, listener) {
            if (type === "request" && typeof listener === "function") {
                return addListener.call(this, type, warpListener(counter, listener));
            }
            return addListener.apply(this, arguments);
        };
        return addListenerWraper;
    });
    return http;
};
var warpListener;
warpListener = function (counter, listener) {
    var newListener;
    newListener = function (request, response) {
        console.log(":::::start");
        counter.addRequestCount(1);
        response.once('finish', function onResponseFinish() {
            console.log(":::::end");
            counter.addResponseCount(1);
        });
        var url = request.originalUrl || request.url;
        var method = request.method;
        console.log(":::::url && method", url, method);
        if (url === "/QPS" && method === "get") {
            app_1.reportQPS(counter, response);
        }
        return listener.apply(this, arguments);
    };
    return newListener;
};
