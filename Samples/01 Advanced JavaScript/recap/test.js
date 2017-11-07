(function(PointEx, Point) {
    "use strict";

    var pt1 = new PointEx(5, 10, 20);
    pt1.dump();

    console.log(pt1 instanceof PointEx);
    console.log(pt1 instanceof Point);
    console.log(pt1 instanceof Object);
    console.log(pt1 instanceof Function);
    console.log(pt1.constructor == Point);
})(myApp.PointEx, myApp.Point);
