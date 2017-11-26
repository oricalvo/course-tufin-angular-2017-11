import "zone.js";
import * as express from "express";
import {platformServer, renderModule} from "@angular/platform-server";
import {AppServerModule} from "./app.server.module";
import {readFileSync} from "fs";
import {join} from "path";

const app = express();

app.get("*", function(req, res) {
  const template = readFileSync(join(__dirname, '../../../../src/index.html')).toString();
  console.log(template);

  renderModule(AppServerModule, {
    document: template,
  }).then(str => {
    res.write(str);
    res.end();
  });
});

app.listen(3000, function() {
  console.log("server is running");
});
