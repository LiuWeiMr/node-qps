# Node-QPS

[![npm version](https://img.shields.io/badge/npm-1.1.0-red.svg)](https://www.npmjs.com/package/node-qps)

Node-QPS是一个测试Web应用QPS（web应用每秒处理请求数量）的工具

## Installation

```bash
$ npm install --save node-qps
```

## Usage

```bash
 Setp1: npm install --save node-qps
 Setp2: 将“require("node-qps")”写到项目主文件第一行（如果首行有"use strict"则写到"use strict"下一行）
 Setp3: 启动应用后通过URL获取应用QPS：http://项目域名/QPS (如：GET http://localhost:3000/QPS)
```

## Test
 - Express V3: testing
 - Express V4: passed
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
     * QPS：每秒处理请求数
     * collectTime：收集间隔，单位：秒