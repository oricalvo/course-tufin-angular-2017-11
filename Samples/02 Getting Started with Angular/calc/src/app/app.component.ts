import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  num1: string;
  num2: string;
  result: number;

  calc() {
    this.result = parseInt(this.num1) * 1 + parseInt(this.num2) * 1;
  }

  reset() {
    this.num1 = "";
    this.num2 = "";
    this.result = undefined;
  }
}
