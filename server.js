/**
 * @Author: Your name
 * @Date:   2023-03-05 08:24:20
 * @Last Modified by:   Your name
 * @Last Modified time: 2023-03-05 09:19:30
 */
const express = require("express");
const app = express();
app.get("/chocolate", function (req, res) {
  res.send("Mm chocolate :O");
});

app.get("/", function (req, res) {
  let searchQuery = req.query.search;
  res.send("Hello World! You searched for " + searchQuery);
});

app.listen(3000, function () {
    console.log("Server is listening on port 3000. Ready to accept requests!");
  });