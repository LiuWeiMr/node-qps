"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Counter = /** @class */ (function () {
    function Counter(collecTime) {
        if (collecTime === void 0) { collecTime = 1000 * 60; }
        this._requestCount = 0;
        this._responseCount = 0;
        this._requsetCountInLastTime = 0;
        this._responseCountInLastTime = 0;
        this._requsetCountOneTimeAgo = 0;
        this._responseCountOneTimeAgo = 0;
        this._noResponseCount = 0;
        this._collectTime = collecTime; // 默认一分钟
        this._QPS = 0;
        this._collectTimer = this.startCollectTimer();
    }
    Object.defineProperty(Counter.prototype, "requestCount", {
        get: function () {
            return this._requestCount;
        },
        enumerable: true,
        configurable: true
    });
    Counter.prototype.addRequestCount = function (addCount) {
        this._requestCount += addCount;
    };
    Object.defineProperty(Counter.prototype, "responseCount", {
        get: function () {
            return this._responseCount;
        },
        enumerable: true,
        configurable: true
    });
    Counter.prototype.addResponseCount = function (addCount) {
        this._responseCount += addCount;
    };
    Object.defineProperty(Counter.prototype, "noResponseCount", {
        get: function () {
            return this._noResponseCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Counter.prototype, "QPS", {
        get: function () {
            return this._QPS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Counter.prototype, "responseCountInLastTime", {
        get: function () {
            return this._responseCountInLastTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Counter.prototype, "requsetCountInLastTime", {
        get: function () {
            return this._requsetCountInLastTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Counter.prototype, "collectTime", {
        get: function () {
            return this._collectTime;
        },
        enumerable: true,
        configurable: true
    });
    Counter.prototype.startCollectTimer = function () {
        return setInterval(this.collect.bind(this), this._collectTime);
    };
    Counter.prototype.clearCollectTimer = function () {
        clearInterval(this._collectTimer);
    };
    Counter.prototype.collect = function () {
        var QPS = (this._responseCount - this._responseCountInLastTime) / (this._collectTime / 1000);
        this._QPS = Math.floor(QPS) / 100;
        this._responseCountInLastTime = this._responseCount;
        this._requsetCountInLastTime = this._requestCount;
        this._noResponseCount = this._requestCount - this._responseCount;
    };
    Counter.prototype.clearMetric = function () {
        this._requestCount = 0;
        this._responseCount = 0;
        this._requsetCountInLastTime = 0;
        this._responseCountInLastTime = 0;
        this._requsetCountOneTimeAgo = 0;
        this._responseCountOneTimeAgo = 0;
        this._noResponseCount = 0;
        this._QPS = 0;
        this.clearCollectTimer();
        this._collectTimer = this.startCollectTimer();
    };
    return Counter;
}());
exports.Counter = Counter;
