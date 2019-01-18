# Node-QPS

[![npm version](https://img.shields.io/badge/npm-1.1.0-red.svg)](https://www.npmjs.com/package/node-qps)
![node](https://img.shields.io/node/v/node-pqs.svg)

Node-QPS是一个测试Web应用QPS（web应用每秒处理请求的数量）的工具

## Installation

```bash
$ npm install --save node-qps
```

## Usage

```bash
 Setp1: npm install --save node-qps
 Setp2: 将“require("node-qps")”写到项目主文件第一行（如果首行有"use strict"则写到"use strict"下一行）
 Setp3: 启动应用后通过URL获取应用QPS：http://项目域名/QPS (如：GET方式，http://localhost:3000/QPS)
```

## Test
 - Express V3: pass
 - Express V4: pass
 - Koa V1: pass
 - Koa V2: pass
 - Egg V1: pass
 - Egg V2: pass


