import { BrowserModule } from '@angular/platform-browser';
import {ApplicationRef, NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { FilterComponent } from './components/filter/filter.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { NewContactComponent } from './components/new-contact/new-contact.component';
import {AppService} from "./services/app.service";
import {APP_STATE_PROVIDER, AppState} from "./app.state";
import {FormsModule} from "@angular/forms";
import {ContactProxy} from "./services/contact.proxy";
import {init as activityInit} from "./fx/activity";
import { ContactItemComponent } from './components/contact-item/contact-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    ContactListComponent,
    NewContactComponent,
    ContactItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    AppService,
    ContactProxy,
    APP_STATE_PROVIDER,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(appService: AppService, appRef: ApplicationRef) {
    appService.init();

    activityInit(appRef);
  }
}
