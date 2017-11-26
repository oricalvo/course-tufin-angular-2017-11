import { NgModule } from '@angular/core';
import {AdminComponent} from "./admin.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {routes} from "./routes";
import {ContactService} from "../contact.service";

@NgModule({
  declarations: [
    AdminComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    //ContactService
  ]
})
export class AdminModule { }
