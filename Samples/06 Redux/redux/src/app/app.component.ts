import { Component } from '@angular/core';
import {AppState, AppStore} from "../appStore";
import {Store} from "redux";
import {ContactActions} from "../actions/contact.actions";
import {CounterActions} from "../actions/counter.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private store: AppStore,
              private contactActions: ContactActions,
              private counterActions: CounterActions) {
    console.log("store", store);
  }

  get contacts() {
    return this.store.getState().contacts;
  }

  get counter() {
    return this.store.getState().counter;
  }

  load() {
    this.store.dispatch(this.contactActions.loadContacts());
  }

  inc() {
    this.store.dispatch(this.counterActions.inc());
  }

  dec() {
    this.store.dispatch(this.counterActions.dec());
  }
}
