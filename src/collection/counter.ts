
export class Counter {
    private _requestCount: number;
    private _responseCount: number;
    private _requsetCountInLastTime: number;
    private _responseCountInLastTime: number;
    private _requsetCountOneTimeAgo: number;
    private _responseCountOneTimeAgo: number;
    private _RPS: number;
    private _collectTime: number;
    private _noResponseCount: number;
    private _collectTimer: any;

    constructor(collecTime = 1000 * 60) {
        this._requestCount = 0;
        this._responseCount = 0;
        this._requsetCountInLastTime = 0;
        this._responseCountInLastTime = 0;
        this._requsetCountOneTimeAgo = 0;
        this._responseCountOneTimeAgo = 0;
        this._noResponseCount = 0;
        this._collectTime = collecTime;    // 默认一分钟
        this._RPS = 0;
        this._collectTimer = this.startCollectTimer();
    }

    public get requestCount(): number {
        return this._requestCount;
    }

    public addRequestCount(addCount: number) {
        this._requestCount += addCount;
    }

    public get responseCount(): number {
        return this._responseCount;
    }

    public addResponseCount(addCount: number) {
        this._responseCount += addCount;
    }

    public get noResponseCount(): number {
        return this._noResponseCount;
    }

    public get RPS(): number {
        return this._RPS;
    }

    public get responseCountInLastTime(): number {
        return this._responseCountInLastTime;
    }

    public get requsetCountInLastTime(): number {
        return this._requsetCountInLastTime;
    }

    public get collectTime(): number {
        return this._collectTime;
    }


    public startCollectTimer(): any {
        return setInterval(this.collect.bind(this), this._collectTime)
    }

    public clearCollectTimer(): void {
        clearInterval(this._collectTimer)
    }

    public collect(): void {
        let RPS = (this._responseCount - this._responseCountInLastTime) / (this._collectTime / 1000);
        this._RPS = Math.floor(RPS) / 100
        this._responseCountInLastTime = this._responseCount;
        this._requsetCountInLastTime = this._requestCount;
        this._noResponseCount = this._requestCount - this._responseCount;
    }

    public clearMetric(): void {
        this._requestCount = 0;
        this._responseCount = 0;
        this._requsetCountInLastTime = 0;
        this._responseCountInLastTime = 0;
        this._requsetCountOneTimeAgo = 0;
        this._responseCountOneTimeAgo = 0;
        this._noResponseCount = 0;
        this._RPS = 0;
        this.clearCollectTimer();
        this._collectTimer = this.startCollectTimer();
    }
}
