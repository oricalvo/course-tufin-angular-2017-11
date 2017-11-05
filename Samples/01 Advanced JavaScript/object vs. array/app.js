var arr = [];
arr.push("Ori");
arr.push("Roni");

var map = {};
map["id"] = 123;
map["name"] = "Ori";

console.log("length", arr.length);
// for(var i=0; i<arr.length; i++) {
//     console.log("    " + arr[i]);
// }

arr.forEach(function(name) {
    console.log("    " + name);
});

for(var name of arr) {
    console.log("    " + name);
}

console.log("keys");
for(var key in map) {
    console.log("    " + key + ":" + map[key]);
}
console.log(Object.keys(map).length);

console.log(map.length);
