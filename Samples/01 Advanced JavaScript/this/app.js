"use strict";

// function g() {
//     console.log(this);
// }
//
// g();

var obj1 = {
    id: 123,
    g: function() {
        console.log(this);
    }
};

var obj2 = {
};

obj1.g.call(obj2);
