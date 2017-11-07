import { Component } from '@angular/core';
import {Http} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contacts: Contact[];
  name: string;

  constructor(http: Http) {
    console.log(http);

    http.get("assets/contacts.json").subscribe(res => {
      this.contacts = res.json();
    });
  }

  remove(contact: Contact, index: number) {
    if(confirm("Delete contact " + contact.name + "?")) {
      this.contacts.splice(index, 1);
    }
  }

  add() {
    if(!this.name) {
      return;
    }

    const contact = {
      id: -1,
      name: this.name,
    };

    this.contacts.push(contact);
  }
}

interface Contact {
  id: number;
  name: string;
}
