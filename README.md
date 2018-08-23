# fe-router

> This is a mini frontend router.

## install 

```
npm i fe-router -D
```

## use 

```
const FERouter = require('fe-router')

const router = new FERouter({
    history: false
})

router.route('/', function () {
    xxx
})
router.route('/1', function () {
    xxx
})
```
