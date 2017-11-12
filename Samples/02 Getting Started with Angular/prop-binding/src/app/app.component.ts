import {Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  flag: boolean = false;
  isAdmin: boolean = true;

  constructor(private elementRef: ElementRef) {
    console.log("element", elementRef);
  }

  toggle() {
    // const button = this.elementRef.nativeElement.querySelector("#btn");
    // button["disabled"] = true;

    this.flag = !this.flag;

    const btn = this.elementRef.nativeElement.querySelector("#btn");
    console.log("disabled", btn.disabled);
  }
}
