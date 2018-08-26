const FERouter = require('../index.js')

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