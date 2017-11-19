import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {AppState} from "../../app.state";
import {AppService} from "../../services/app.service";
import {Contact} from "../../models/contact";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  constructor(private appState: AppState, private appService: AppService) {

  }

  ngOnInit() {
  }

  get contacts() {
    return this.appState.contacts;
  }

  get refreshing() {
    return this.appState.refreshing;
  }

  onContactDelete(contact: Contact) {
    this.appService.delete(contact);
  }
}
