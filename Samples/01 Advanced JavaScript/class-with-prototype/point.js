function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.dump = function() {
    console.log(this.x + ", " + this.y);
}

function PointEx(x, y, z) {
    Point.call(this, x, y);

    this.z = z;
}

PointEx.prototype = Object.create(Point.prototype);

PointEx.prototype.dump = function() {
    Point.prototype.dump.call(this);

    console.log(this.z);
}

var pt1 = new PointEx(5, 10, 20);
pt1.dump();
console.log(pt1);
