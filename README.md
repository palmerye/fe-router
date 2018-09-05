# fe-router

[![NPM](https://nodei.co/npm/fe-router.png)](https://nodei.co/npm/fe-router/)

![](https://img.shields.io/badge/rollup-0.65.0-brightgreen.svg)
[![Analytics](https://ga-beacon.appspot.com/UA-124794789-1/welcome-page)](https://github.com/igrigorik/ga-beacon)

> This is a mini frontend router.

## install 

```
npm i fe-router -D
```

## use 

```
const FERouter = require('fe-router')

const routeMap = {
    '/': function () {
        xxx
    },
    '/1': function () {
        xxx
    }
}

const router = new FERouter({
    history: false, // true: history model,  false: hash model, default model: hash model
    routeMap
})

router.push('/')
router.push('/1')

```
