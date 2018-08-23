function FeRouter(option) {
    this.init(option)
}

FeRouter.prototype.init = function (option) {
    this.currentUrl = ''
    this.routes = {}
    if (option.history) {
        // history 
    } else {
        // hash 
        window.addEventListener('load', this.changeUrl.bind(this))
        window.addEventListener('hashchange', this.changeUrl.bind(this))
        if (location.hash.slice(1) !== '/') {
            location.hash = '#/'
        }
    }
}

FeRouter.prototype.changeUrl = function () {
    this.currentUrl = location.hash.slice(1)
    this.routes[this.currentUrl]()
}

FeRouter.prototype.route = function (path, callback) {
    this.routes[path] = callback
}

module.exports = FeRouter
