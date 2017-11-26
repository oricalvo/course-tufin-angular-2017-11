import {Injectable, InjectionToken} from '@angular/core';
import {HttpService} from "./http.service";

function MyBlabla() {
  return function(target) {
  }
}

//@Injectable()
//@MyBlabla()
export class ContactService {
  static parameters = [HttpService];

  constructor(http: HttpService) {
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

// export class ContactServiceEx {
//   getAll(): Contact[] {
//     return [
//       {"id": 1, "name": "Ori"},
//       {"id": 2, "name": "Roni"},
//     ];
//   }
// }

export interface Contact {
  id: number;
  name: string;
}

export function contactServiceFactory(http: HttpService) {
  console.log("factory", http);

  return new ContactService(null);
}

//export const TOKEN = "XXX";
export const TOKEN = new InjectionToken<ContactService>("XXX");

export const CONTACT_PROVIDER = {
  provide: TOKEN,
  useFactory: contactServiceFactory,
  deps: [HttpService]
};
