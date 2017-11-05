var pool1 = new common.ObjectPool();
var pool2 = new common.ObjectPool();

console.log("is the same", pool1.add == pool2.add);

var obj1 = {
    id: 1,
};

var obj2 = {
    id: 1,
};

pool1.add(obj1);
pool1.add(obj1);

console.log(pool1.contains(obj2)); //false

const res = pool1.take();

console.log(res == obj1); //true

console.log(pool1.take()); //null

function Dummy() {
}

var d = new Dummy();
d.pool1 = pool1;
