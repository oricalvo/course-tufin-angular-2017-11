import {FileTypes, Item} from "../../common/models";

export function isDirectory(item: Item) {
    return item.type == FileTypes.Directory;
}

export function isRoot(path: string) {
    return path == "";
}

export function getParent(path: string) {
    const index = path.lastIndexOf("/");
    return path.substring(0, index-1);
}

