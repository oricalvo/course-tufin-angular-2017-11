var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var PointEx = (function (_super) {
    __extends(PointEx, _super);
    function PointEx(x, y, z) {
        var _this = _super.call(this, x, y) || this;
        _this.z = z;
        return _this;
    }
    PointEx.prototype.dump = function () {
        _super.prototype.dump.call(this);
        console.log(this.z);
    };
    return PointEx;
}(Point));
var pt1 = new PointEx(5, 10, 20);
pt1.dump();
function doSomething(x) {
    x.
    ;
}
