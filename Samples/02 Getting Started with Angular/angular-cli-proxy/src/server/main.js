"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get("/api/contact", function (req, res) {
    var contacts = [
        { "id": 1, "name": "OriX" },
        { "id": 2, "name": "RoniY" },
    ];
    res.json(contacts);
});
app.listen(3000, function () {
    console.log("Server is running");
});
//# sourceMappingURL=main.js.map