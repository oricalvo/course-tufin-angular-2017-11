import {Route} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ContactDetailsComponent} from "./contact-details/contact-details.component";

export const routes: Route[] = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "contact/:id",
    component: ContactDetailsComponent,
  },
  {
    path: "admin",
    loadChildren: "app/admin/admin.module#AdminModule"
  },
];
