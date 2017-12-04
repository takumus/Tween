"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cubic_bezier_1 = require("cubic-bezier");
var Tween = /** @class */ (function () {
    function Tween(props) {
        this.props = props;
        this.startTime = -1;
        this.id = Tween._id++;
        this.update(function () { });
        this.complete(function () { });
        props.easing = props.easing ? props.easing : module.exports.easings.linear; = exports.easings.linear;
    }
    Tween.prototype.update = function (callback) {
        this.updateCallback = callback;
        return this;
    };
    Tween.prototype.complete = function (callback) {
        this.completeCallback = callback;
        return this;
    };
    Tween.prototype.start = function () {
        this.startTime = Date.now();
        TweenManager.add(this);
    };
    Tween.prototype.__update = function (time) {
        var progress = this.props.easing((time - this.startTime) / this.props.duration);
        if (progress >= 1) {
            progress = 1;
            this.updateCallback(this.props.to);
            this.completeCallback();
            return true;
        }
        var props = {};
        for (var key in this.props.from) {
            props[key] = (1 - progress) * this.props.from[key] + this.props.to[key] * progress;
        }
        this.updateCallback(props);
        return false;
    };
    Tween._id = 0;
    return Tween;
}());
module.exports = Tween; module.exports.default = Tween; exports.default = Tween;
var TweenManager = new /** @class */ (function () {
    function class_1() {
        this.tweens = {};
    }
    class_1.prototype.tick = function () {
        var now = Date.now();
        for (var id in this.tweens) {
            var completed = this.tweens[id].__update(now);
            if (completed)
                delete this.tweens[id];
        }
    };
    class_1.prototype.add = function (tween) {
        this.tweens[tween.id] = tween;
    };
    return class_1;
}());
function tick() {
    TweenManager.tick();
}
module.exports.tick = exports.tick = tick;
module.exports.cb = exports.cb = cubic_bezier_1.default;
// samples
module.exports.easings = exports.easings = {
    linear: function (n) { return n; },
    in: {
        sine: module.exports.cb(0.47, = exports.cb(0.47, 0, 0.745, 0.715),
        cubic: module.exports.cb(0.55, = exports.cb(0.55, 0.055, 0.675, 0.19),
        quint: module.exports.cb(0.755, = exports.cb(0.755, 0.05, 0.855, 0.06),
        circ: module.exports.cb(0.6, = exports.cb(0.6, 0.04, 0.98, 0.335),
        quad: module.exports.cb(0.55, = exports.cb(0.55, 0.085, 0.68, 0.53),
        quart: module.exports.cb(0.895, = exports.cb(0.895, 0.03, 0.685, 0.22),
        expo: module.exports.cb(0.95, = exports.cb(0.95, 0.05, 0.795, 0.035),
        back: module.exports.cb(0.6, = exports.cb(0.6, -0.28, 0.735, 0.045)
    },
    out: {
        sine: module.exports.cb(0.39, = exports.cb(0.39, 0.575, 0.565, 1),
        cubic: module.exports.cb(0.215, = exports.cb(0.215, 0.61, 0.355, 1),
        quint: module.exports.cb(0.23, = exports.cb(0.23, 1, 0.32, 1),
        circ: module.exports.cb(0.075, = exports.cb(0.075, 0.82, 0.165, 1),
        quad: module.exports.cb(0.25, = exports.cb(0.25, 0.46, 0.45, 0.94),
        quart: module.exports.cb(0.165, = exports.cb(0.165, 0.84, 0.44, 1),
        expo: module.exports.cb(0.19, = exports.cb(0.19, 1, 0.22, 1),
        back: module.exports.cb(0.175, = exports.cb(0.175, 0.885, 0.32, 1.275)
    },
    inOut: {
        sine: module.exports.cb(0.445, = exports.cb(0.445, 0.05, 0.55, 0.95),
        cubic: module.exports.cb(0.645, = exports.cb(0.645, 0.045, 0.355, 1),
        quint: module.exports.cb(0.86, = exports.cb(0.86, 0, 0.07, 1),
        circ: module.exports.cb(0.785, = exports.cb(0.785, 0.135, 0.15, 0.86),
        quad: module.exports.cb(0.455, = exports.cb(0.455, 0.03, 0.515, 0.955),
        quart: module.exports.cb(0.77, = exports.cb(0.77, 0, 0.175, 1),
        expo: module.exports.cb(1, = exports.cb(1, 0, 0, 1),
        back: module.exports.cb(0.68, = exports.cb(0.68, -0.55, 0.265, 1.55)
    },
};
