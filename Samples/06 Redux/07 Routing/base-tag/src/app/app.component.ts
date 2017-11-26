import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
// import { HttpClient } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(httpClient: HttpClient) {
    httpClient.get("assets/contacts.json").subscribe(contacts => {
      console.log(contacts);
    });
  }
}
