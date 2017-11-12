import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ClockComponent } from './clock/clock.component';
import { MyPipe } from './my.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ClockComponent,
    MyPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
