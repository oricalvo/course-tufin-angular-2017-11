"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var fs = require("fs");
var path = require("path");
var models_1 = require("../common/models");
var app = express();
app.get("/api/items/:dir?", function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        var dir_1, dirItems_1, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    dir_1 = "C:\\" + (req.params.dir || "");
                    dirItems_1 = [];
                    return [4 /*yield*/, readdir(dir_1).then(function (items) { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            return __generator(this, function (_a) {
                                return [2 /*return*/, Promise.all(items.map(function (item) { return __awaiter(_this, void 0, void 0, function () {
                                        var fileType, err_2;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    _a.trys.push([0, 2, , 3]);
                                                    return [4 /*yield*/, getFileType(path.join(dir_1, item))];
                                                case 1:
                                                    fileType = _a.sent();
                                                    dirItems_1.push({
                                                        name: item,
                                                        type: fileType,
                                                    });
                                                    return [3 /*break*/, 3];
                                                case 2:
                                                    err_2 = _a.sent();
                                                    return [3 /*break*/, 3];
                                                case 3: return [2 /*return*/];
                                            }
                                        });
                                    }); }))];
                            });
                        }); })];
                case 1:
                    _a.sent();
                    setTimeout(function () {
                        res.json(dirItems_1);
                    }, 2500);
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    res.status(500);
                    res.statusMessage = err_1.message;
                    res.end();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
});
function getFileType(path) {
    return __awaiter(this, void 0, void 0, function () {
        var stat;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, lstat(path)];
                case 1:
                    stat = _a.sent();
                    return [2 /*return*/, stat.isDirectory() ? models_1.FileTypes.Directory : models_1.FileTypes.File];
            }
        });
    });
}
function readdir(path) {
    return new Promise(function (resolve, reject) {
        fs.readdir(path, function (err, items) {
            if (err) {
                reject(err);
                return;
            }
            resolve(items);
        });
    });
}
function lstat(path) {
    return new Promise(function (resolve, reject) {
        fs.lstat(path, function (err, stat) {
            if (err) {
                reject(err);
                return;
            }
            resolve(stat);
        });
    });
}
function getType(path) {
    return new Promise(function (resolve, reject) {
        fs.readdir(path, function (err, items) {
            if (err) {
                reject(err);
                return;
            }
            resolve(items);
        });
    });
}
app.listen(3000, function () {
    console.log("Server is running");
});
//# sourceMappingURL=main.js.map