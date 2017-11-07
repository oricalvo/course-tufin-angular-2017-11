import * as express from "express";

const app = express();

app.get("/api/contact", function(req, res) {
  const contacts = [
    {"id": 1, "name": "OriX"},
    {"id": 2, "name": "RoniY"},
  ];

  res.json(contacts);
});

app.listen(3000, function() {
  console.log("Server is running");
});
