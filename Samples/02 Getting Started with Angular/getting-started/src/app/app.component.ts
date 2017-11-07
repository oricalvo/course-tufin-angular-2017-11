import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter: number;
  name: string;

  constructor() {
    this.counter = 0;
  }

  inc() {
    console.log(this.name);

    ++this.counter;
  }
}
