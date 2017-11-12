import {Component, ElementRef, ViewChild} from '@angular/core';
import {ClockComponent} from "./clock/clock.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  flag: boolean = false;
  isAdmin: boolean = true;
  clockFormat: string = "ss";
  @ViewChild("clock1") clock1: ClockComponent;

  constructor(private elementRef: ElementRef) {
    console.log("element", elementRef);
    console.log("clock1", this.clock1);
  }

  ngOnInit() {
    console.log("clock1", this.clock1);
  }

  toggle() {
    // const button = this.elementRef.nativeElement.querySelector("#btn");
    // button["disabled"] = true;

    this.flag = !this.flag;

    const btn = this.elementRef.nativeElement.querySelector("#btn");
    console.log("disabled", btn.disabled);
  }

  onTick(args) {
    console.log("Tick", args.time);
  }

  changeFormat() {
    this.clockFormat = "mm:ss";
  }

  stopClock() {
    this.clock1.stop();
  }
}
