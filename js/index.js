"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.startTime = Date.now();
                TweenManager.add(this);
                if (typeof Promise === 'undefined')
                    return [2 /*return*/, null];
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.promiseComplete = function () { return resolve(); };
                    })];
            });
        });
    };
    Tween.prototype.__update = function (time) {
        var progress = (time - this.startTime) / this.duration;
        var easing = this.easing(progress);
        if (progress >= 1) {
            progress = 1;
            this.updateCallback(this.to);
            return true;
        }
        var props = {};
        for (var key in this.from) {
            props[key] = (1 - easing) * this.from[key] + this.to[key] * easing;
        }
        this.updateCallback(props);
        return false;
    };
    Tween.prototype.__complete = function () {
        this.completeCallback();
        this.promiseComplete();
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
