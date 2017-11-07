const arr = [];

arr.push(1);
arr.push(2);


const [x,y,...z] = arr;

for(const x of arr) {
    console.log(x);
}