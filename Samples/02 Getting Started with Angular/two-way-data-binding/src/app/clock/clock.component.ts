import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ClockComponent implements OnInit {
  time: Date;
  @Input() format: string;

  @Output() tick: EventEmitter<ClockEventArgs> = new EventEmitter<ClockEventArgs>();
  @Output() formatChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.time = new Date();
    this.format = "HH:mm:ss";

    console.log("format", this.format);
  }

  ngOnInit() {
    setInterval(()=> {
      this.time = new Date();

      const args: ClockEventArgs = {
        time: this.time,
      };
      this.tick.emit(args);
    }, 1000);

    console.log("format", this.format);
  }

  resetFormat() {
    //this.format = "HH:mm:ss";

    this.formatChange.emit("HH:mm:ss");
  }

  stop() {
    console.log("Clock.stop");
  }
}

export interface ClockEventArgs {
  time: Date;
}
