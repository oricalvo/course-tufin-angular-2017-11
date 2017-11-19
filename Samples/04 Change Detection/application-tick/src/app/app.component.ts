import {ApplicationRef, Component, ElementRef, NgZone} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  contacts;
  counter: number = 0;

  constructor(private elementRef: ElementRef,
              private ngZone: NgZone,
              private applicationRef: ApplicationRef) {
    const arr = [
      {"id": 1, "name": "Ori"},
      {"id": 2, "name": "Roni"},
      {"id": 3, "name": "Udi"},
      {"id": 4, "name": "Tommy"},
    ];

    this.contacts = [];
    for(let i=0; i<2500; i++) {
      for (const contact of arr) {
        this.contacts.push({
          ...contact,
        });
      }
    }

    console.log("%O", setTimeout);

    this.ngZone.runOutsideAngular(()=> {
      this.initLegacyLibrary(() => {
        console.log("On callback");

        this.counter = 1000;

        this.applicationRef.tick();
      });
    });
  }

  private initLegacyLibrary(callback) {
    console.log("%O", setTimeout);

    setTimeout(callback, 2500);

    this.elementRef.nativeElement.addEventListener("mousemove", function() {
    });
  }

  noop() {
  }

  getDisplayName(contact) {
    //console.log("getDisplayName");

    return contact.name;
  }
}
