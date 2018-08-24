# fe-router

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
    history: false, // true: history model ,  false: hash model
    routeMap
})

router.push('/')
router.push('/1')

```
