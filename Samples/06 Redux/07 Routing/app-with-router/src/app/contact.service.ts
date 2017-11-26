import { Injectable } from '@angular/core';

@Injectable()
export class ContactService {
  contacts: Contact[];

  constructor() {
    console.log("ContactService.ctor");

    this.contacts = [
      {"id": 1, "name": "Ori"},
      {"id": 2, "name": "Roni"},
      {"id": 3, "name": "Udi"},
      {"id": 4, "name": "Tommy"},
    ];
  }

  get(contactId: any): Contact {
    const contact = this.contacts.find(c => c.id == contactId);
    return contact;
  }
}

export interface Contact {
  id: number;
  name: string;
}
