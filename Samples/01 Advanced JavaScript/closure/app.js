function Counter(num) {
    function log() {
        console.log(num);
    }

    function inc() {
        ++num;
    }

    return {
        log: log,
        inc: inc,
    };
}

var c1 = new Counter(5);
var c2 = new Counter(10);

c1.inc();

c1.num = 3;

c1.inc();


c2.log();
