"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.dump = function () {
        console.log(this.x + ", " + this.y);
    };
    return Point;
}());
exports.Point = Point;
