export enum FileTypes {
    File = "file",
    Directory = "directory",
}

export type ItemType = FileTypes.File | FileTypes.Directory;

export interface Item {
    name: string;
    type: ItemType;
}
