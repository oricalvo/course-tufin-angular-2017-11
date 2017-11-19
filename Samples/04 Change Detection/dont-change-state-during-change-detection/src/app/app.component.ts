import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter: number = 0;
  title = 'app';
  format = "XXX";
  arr = [1,2,3];

  ngOnInit() {
    console.log("ngOnInit");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");

    //console.log(++this.counter);
  }

  ngDoCheck() {
    console.log("ngDoCheck");
  }

  change() {
    //this.format = "YYY";
    //this.arr.push(4);
    this.arr = this.arr.concat([4]);
  }
}
