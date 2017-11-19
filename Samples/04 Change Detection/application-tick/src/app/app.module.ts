import { BrowserModule } from '@angular/platform-browser';
import {ApplicationRef, NgModule} from '@angular/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(applicationRef: ApplicationRef) {
    const originalTick = applicationRef.tick;

    applicationRef.tick = function() {
      const before = performance.now();

      const retVal = originalTick.apply(this, arguments);

      const after = performance.now();

      console.log("Change detection", (after-before));

      return retVal;
    }
  }
}
