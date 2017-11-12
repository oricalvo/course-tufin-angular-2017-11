import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ClockComponent implements OnInit {
  time: Date;

  constructor() {
    this.time = new Date();
  }

  ngOnInit() {
    setInterval(()=> {
      this.time = new Date();
    }, 1000);
  }
}
