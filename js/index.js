"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cubic_bezier_1 = require("cubic-bezier");
var Tween = /** @class */ (function () {
    function Tween(props) {
        console.log(props);
    }
    Tween.prototype.update = function (callback) {
        this.updateCallback = callback;
    };
    Tween.prototype.complete = function (callback) {
        this.completeCallback = callback;
    };
    Tween.prototype.start = function () {
    };
    return Tween;
}());
module.exports = Tween; module.exports.default = Tween; exports.default = Tween;
module.exports.cubicBezier = exports.cubicBezier = cubic_bezier_1.default;
// samples
module.exports.easings = exports.easings = {};
