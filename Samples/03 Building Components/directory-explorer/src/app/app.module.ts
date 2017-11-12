import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DirectoryExplorerComponent} from './directory-explorer/directory-explorer.component';
import {HttpClientModule} from "@angular/common/http";
import { DirectoryContentComponent } from './directory-content/directory-content.component';

@NgModule({
    declarations: [
        AppComponent,
        DirectoryExplorerComponent,
        DirectoryContentComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
