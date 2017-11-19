import {Injectable} from '@angular/core';
import {AppState} from "../app.state";
import {ContactProxy} from "./contact.proxy";
import {Activity} from "../fx/activity";
import {Contact} from "../models/contact";

@Injectable()
export class AppService {

  constructor(private state: AppState,
              private contactProxy: ContactProxy) {
  }

  @Activity()
  init() {
    this.state.all = this.state.contacts = [
      {"id": 1, "name": "Ori"},
      {"id": 2, "name": "Roni"},
      {"id": 3, "name": "Udi"},
      {"id": 4, "name": "Tommy"},
    ];
  }

  @Activity()
  filter(str: string) {
    this.state.filter = str;

    this.runFilter();
  }

  @Activity()
  add(name: string) {
    const contact = {
      id: -1,
      name: name,
    };

    this.state.all.push(contact);

    this.runFilter();
  }

  @Activity()
  async refresh() {
    this.state.refreshing = true;

    try {
      this.state.all = await this.contactProxy.getAll();
      this.runFilter();
    }
    finally {
      this.state.refreshing = false;
    }
  }

  @Activity()
  delete(contact: Contact) {
    const index = this.state.all.findIndex(c => c == contact);
    if(index != -1) {
      this.state.contacts.splice(index, 1);
      this.runFilter();
    }
  }

  private runFilter() {
    if (!this.state.filter) {
      this.state.contacts = this.state.all;
      return;
    }

    this.state.contacts = this.state.all.filter(c => c.name.toLowerCase().indexOf(this.state.filter.toLowerCase()) != -1);
  }
}
