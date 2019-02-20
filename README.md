# Node-QPS

[![npm version](https://img.shields.io/badge/npm-1.1.0-red.svg)](https://www.npmjs.com/package/node-qps)

Node-RPS是一个统计Web应用RPS（node web server每秒响应请求数量）的工具

## Installation

```bash
$ npm install --save node-rps
```

## Usage

```bash
 Setp1: npm install --save node-rps
 Setp2: 将“require("node-rps")”写到项目主文件第一行（如果首行有"use strict"则写到"use strict"下一行）
 Setp3: 启动应用后通过控制台查看
```

## Test
 - Express V3: testing
 - Express V4: OK
 - Koa V1: testing
 - Koa V2: testing
 - Egg V1: testing
 - Egg V2: testing

## Comment
 + 返回指标注释：
     * requestCount：接收到请求数
     * responseCount：响应请求数
     * requsetCountInLastTime：collectTime/1000秒内接收到请求数
     * responseCountInLastTime：collectTime/1000秒内响应请求数
     * noRespsnseCount：待响应请求数
     * RPS：每秒响应请求数
     * collectTime：收集间隔，单位：秒
