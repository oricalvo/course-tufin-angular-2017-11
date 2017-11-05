var g = null;

var obj = {
    id: 1,
};

var res = g || obj;

console.log(res == obj);

if(gc!=null) {
    gc.collect();
}

var res = gc && gc.collect();
