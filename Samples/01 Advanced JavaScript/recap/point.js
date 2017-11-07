var myApp = myApp || {};

myApp.Point = (function() {
    "use strict";

    function Point(x, y) {
        this.x = x;
        this.y = y;
    }

    Point.prototype.dump = function() {
        console.log(this.x + ", " + this.y);
    }

    return Point;
})();
