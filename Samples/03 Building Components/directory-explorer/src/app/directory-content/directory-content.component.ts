import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Item} from "../../common/models";
import {isDirectory, isRoot} from "../common/app.store";

@Component({
    selector: 'app-directory-content',
    templateUrl: './directory-content.component.html',
    styleUrls: ['./directory-content.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class DirectoryContentComponent implements OnInit {
    @Input() items: Item[];
    @Input() hasParent: boolean;
    @Output() onSelect: EventEmitter<Item> = new EventEmitter<Item>();
    @Output() onUp: EventEmitter<any> = new EventEmitter<any>();

    constructor() {
    }

    ngOnInit() {
    }

    select(item: Item) {
        this.onSelect.emit(item);
    }

    up() {
        this.onUp.emit();
    }
}
