import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Hello Angular</h1>
  <ul>
    <li *ngFor="let contact of contacts">
      <span>{{contact.name}}</span>
    </li>
  </ul>`,
})
export class AppComponent {
  title = 'app';

  contacts: Contact[];

  constructor() {
    this.contacts = [
      {"id": 1, "name": "Ori"},
      {"id": 2, "name": "Roni"},
      {"id": 3, "name": "Udi"},
      {"id": 4, "name": "Tommy"},
   ];
  }
}

interface Contact {
  id: number;
  name: string;
}
