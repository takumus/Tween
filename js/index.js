"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cubic_bezier_1 = require("cubic-bezier");
var Tween = /** @class */ (function () {
    function Tween(duration, from, to, easing) {
        if (easing === void 0) { easing = Tween.easings.linear; }
        this.duration = duration;
        this.from = from;
        this.to = to;
        this.easing = easing;
        this.startTime = -1;
        this.id = Tween._id++;
        this.update(function () { });
        this.complete(function () { });
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
        var progress = this.easing((time - this.startTime) / this.duration);
        if (progress >= 1) {
            progress = 1;
            this.updateCallback(this.to);
            return true;
        }
        var props = {};
        for (var key in this.from) {
            props[key] = (1 - progress) * this.from[key] + this.to[key] * progress;
        }
        this.updateCallback(props);
        return false;
    };
    Tween.prototype.__complete = function () {
        this.completeCallback();
    };
    Tween._id = 0;
    return Tween;
}());
var TweenManager = new /** @class */ (function () {
    function class_1() {
        this.tweens = {};
    }
    class_1.prototype.tick = function () {
        var now = Date.now();
        for (var id in this.tweens) {
            var tween = this.tweens[id];
            var completed = tween.__update(now);
            if (completed) {
                delete this.tweens[id];
                tween.__complete();
            }
        }
    };
    class_1.prototype.add = function (tween) {
        this.tweens[tween.id] = tween;
    };
    return class_1;
}());
(function (Tween) {
    function tick() {
        TweenManager.tick();
    }
    Tween.tick = tick;
    Tween.cb = cubic_bezier_1.default;
    // samples
    Tween.easings = {
        linear: function (n) { return n; },
        in: {
            sine: Tween.cb(0.47, 0, 0.745, 0.715),
            cubic: Tween.cb(0.55, 0.055, 0.675, 0.19),
            quint: Tween.cb(0.755, 0.05, 0.855, 0.06),
            circ: Tween.cb(0.6, 0.04, 0.98, 0.335),
            quad: Tween.cb(0.55, 0.085, 0.68, 0.53),
            quart: Tween.cb(0.895, 0.03, 0.685, 0.22),
            expo: Tween.cb(0.95, 0.05, 0.795, 0.035),
            back: Tween.cb(0.6, -0.28, 0.735, 0.045)
        },
        out: {
            sine: Tween.cb(0.39, 0.575, 0.565, 1),
            cubic: Tween.cb(0.215, 0.61, 0.355, 1),
            quint: Tween.cb(0.23, 1, 0.32, 1),
            circ: Tween.cb(0.075, 0.82, 0.165, 1),
            quad: Tween.cb(0.25, 0.46, 0.45, 0.94),
            quart: Tween.cb(0.165, 0.84, 0.44, 1),
            expo: Tween.cb(0.19, 1, 0.22, 1),
            back: Tween.cb(0.175, 0.885, 0.32, 1.275)
        },
        inOut: {
            sine: Tween.cb(0.445, 0.05, 0.55, 0.95),
            cubic: Tween.cb(0.645, 0.045, 0.355, 1),
            quint: Tween.cb(0.86, 0, 0.07, 1),
            circ: Tween.cb(0.785, 0.135, 0.15, 0.86),
            quad: Tween.cb(0.455, 0.03, 0.515, 0.955),
            quart: Tween.cb(0.77, 0, 0.175, 1),
            expo: Tween.cb(1, 0, 0, 1),
            back: Tween.cb(0.68, -0.55, 0.265, 1.55)
        },
    };
})(Tween || (Tween = {}));
module.exports = Tween; module.exports.default = Tween; exports.default = Tween;
