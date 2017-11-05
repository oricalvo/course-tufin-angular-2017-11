const pool1 = new common.ObjectPool();

const obj1 = {
    id: 1,
};

const obj2 = {
    id: 1,
};

pool1.add(obj1);
pool1.add(obj1);

console.log(pool1.contains(obj2)); //false

const res = pool1.take();

console.log(res == obj1); //true

console.log(pool1.take()); //null
