import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {AppService} from "../../services/app.service";

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css'],
})
export class NewContactComponent implements OnInit {
  name: string;

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  add() {
    if(!this.name) {
      return;
    }

    this.appService.add(this.name);
  }

  onKeyPress($event: KeyboardEvent) {
    if($event.which == 13) {
      this.add();
    }
  }
}
