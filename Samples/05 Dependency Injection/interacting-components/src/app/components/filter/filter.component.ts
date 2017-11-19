import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {AppService} from "../../services/app.service";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  filterStr: string;

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  filter(filterStr) {
    this.filterStr = filterStr;

    this.appService.filter(this.filterStr);
  }

  refresh() {
    this.appService.refresh();
  }
}
