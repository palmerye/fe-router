(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.FeRouter = factory());
}(this, (function () { 'use strict';

    function FeRouter(option) {
        this._history = option.history;
        this.currentUrl = '';
        this.routes = {};
        this.register(option.routeMap);
    }

    FeRouter.prototype.init = function () {
        var _this = this;

        if (this._history) {
            // history model
            var _locPath = location.pathname;
            history.replaceState({ path: _locPath }, '', _locPath);
            this.routes[_locPath] && this.routes[_locPath]();
            window.addEventListener('popstate', function (e) {
                _this.changeUrl();
            });
        } else {
            // hash model
            window.addEventListener('hashchange', this.changeUrl.bind(this));
            if (location.hash.slice(1) !== '/') {
                location.hash = '#/';
            }
        }
    };

    FeRouter.prototype.changeUrl = function () {
        if (this._history) {
            this.currentUrl = location.pathname;
        } else {
            this.currentUrl = location.hash.slice(1);
        }
        this.routes[this.currentUrl]();
    };

    FeRouter.prototype.register = function (routeMap) {
        var _this2 = this;

        Object.keys(routeMap).forEach(function (key) {
            _this2.routes[key] = routeMap[key];
        });

        this.init();
    };

    FeRouter.prototype.push = function (path) {
        if (this._history) {
            // history model
            history.pushState({ path: path }, null, path);
            this.changeUrl();
        } else {
            // hash model
            location.hash = path;
        }
    };

    return FeRouter;

})));
