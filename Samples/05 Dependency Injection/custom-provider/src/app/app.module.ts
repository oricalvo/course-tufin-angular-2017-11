import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CONTACT_PROVIDER, ContactService, contactServiceFactory, TOKEN} from "./contact.service";
import {inject} from "@angular/core/testing";
import {HttpService} from "./http.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    //ContactService,
    CONTACT_PROVIDER,
    //{provide: "YYY", useClass: ContactService},
    //ContactService,
    //{provide: "XXX", useExisting: ContactService},
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const service = injector.get(TOKEN);
    console.log(service);
  }
}
