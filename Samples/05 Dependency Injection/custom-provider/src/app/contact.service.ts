import { Injectable } from '@angular/core';

@Injectable()
export class ContactService {

  constructor() {
    console.log("ContactService.ctor");
  }

  getAll(): Contact[] {
    return [
      {"id": 1, "name": "Ori"},
      {"id": 2, "name": "Roni"},
      {"id": 3, "name": "Udi"},
      {"id": 4, "name": "Tommy"},
    ];
  }
}

export interface Contact {
  id: number;
  name: string;
}

