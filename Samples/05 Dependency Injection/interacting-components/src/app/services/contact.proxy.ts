import {Injectable} from '@angular/core';
import {Contact} from "../models/contact";

@Injectable()
export class ContactProxy {
  requestNumber: number = 0;

  getAll(): Promise<Contact[]> {
    ++this.requestNumber;

    return new Promise((resolve, reject) => {
      setTimeout(()=> {
        resolve([
          {"id": 1, "name": "Ori" + this.requestNumber},
          {"id": 2, "name": "Roni" + this.requestNumber},
          {"id": 3, "name": "Udi" + this.requestNumber},
          {"id": 4, "name": "Tommy" + this.requestNumber},
        ]);
      }, 2500);
    });
  }
}
