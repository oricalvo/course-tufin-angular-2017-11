import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {APP_STORE_PROVIDER, AppStore} from "../appStore";
import {HttpClientModule} from "@angular/common/http";
import {ContactActions} from "../actions/contact.actions";
import {CounterActions} from "../actions/counter.actions";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    APP_STORE_PROVIDER,
    ContactActions,
    CounterActions,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
