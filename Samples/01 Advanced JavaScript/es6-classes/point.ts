export class Point {
    constructor(private x: number, private y: number) {
    }

    dump() {
        console.log(this.x + ", " + this.y);
    }
}
