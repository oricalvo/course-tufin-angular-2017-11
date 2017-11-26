import {Component, Inject, Injector} from '@angular/core';
import {Contact, ContactService, TOKEN} from "./contact.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  contacts: Contact[];

  constructor(contactService: ContactService, private injector: Injector) {
    this.contacts = contactService.getAll();
  }

  run() {
    const token = "XXX";
    const service = this.injector.get(token);
    console.log("service", service);
  }
}

