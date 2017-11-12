import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {FileTypes, Item} from "../../common/models";
import {getParent, isDirectory, isRoot} from "../common/app.store";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-directory-explorer',
    templateUrl: './directory-explorer.component.html',
    styleUrls: ['./directory-explorer.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class DirectoryExplorerComponent implements OnInit {
    path: string;
    dir: Item;
    items: Item[];

    constructor(private httpClient: HttpClient) {
        this.path = "";
    }

    ngOnInit() {
        this.reload();
    }

    private reload() {
        this.httpClient.get("api/items" + this.path).subscribe(res => {
            this.items = <any>res;
        });
    }

    select(item: Item) {
        if(isDirectory(item)) {
            this.path = this.path + "/" + item.name;
            this.items = null;
            this.reload();
        }
    }

    up() {
        if(isRoot(this.path)) {
            return;
        }

        this.path = getParent(this.path);
        this.items = null;
        this.reload();
    }

    hasParent() {
        return !isRoot(this.path);
    }
}

