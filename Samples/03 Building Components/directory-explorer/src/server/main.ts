import * as express from "express";
import * as fs from "fs";
import * as path from "path";
import {Stats} from "fs";
import {FileTypes, Item} from "../common/models";

const app = express();

app.get("/api/items/:dir?", async function(req, res) {
    try {
        let dir = "C:\\" + (req.params.dir || "");

        const dirItems = [];

        await readdir(dir).then(async items => Promise.all(items.map(async item => {
                try {
                    const fileType: FileTypes = await getFileType(path.join(dir, item));
                    dirItems.push({
                        name: item,
                        type: fileType,
                    });
                }
                catch (err) {
                    //
                    //  ignore file
                    //
                }
            }
        )));

        setTimeout(function() {
            res.json(dirItems);
        }, 2500);
    }
    catch(err) {
        res.status(500);
        res.statusMessage = err.message;
        res.end();
    }
});

async function getFileType(path: string): Promise<FileTypes> {
    const stat = await lstat(path);
    return stat.isDirectory() ? FileTypes.Directory : FileTypes.File;
}

function readdir(path: string): Promise<string[]> {
    return new Promise(function(resolve, reject) {
        fs.readdir(path, function(err, items) {
            if(err) {
                reject(err);
                return;
            }

            resolve(items);
        });
    });
}

function lstat(path: string): Promise<Stats> {
    return new Promise(function(resolve, reject) {
        fs.lstat(path, function(err, stat) {
            if(err) {
                reject(err);
                return;
            }

            resolve(stat);
        });
    });
}

function getType(path: string) {
    return new Promise(function(resolve, reject) {
        fs.readdir(path, function(err, items) {
            if(err) {
                reject(err);
                return;
            }

            resolve(items);
        });
    });
}

app.listen(3000, function() {
    console.log("Server is running");
});
