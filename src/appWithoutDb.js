const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const viewRouter = require("./routers/view.router");
const apiRouter = require("./routers/api.router");
const app = express();
const envConfigs = require("../config/environment");
const http = require("http");
const https = require("https");
const fs = require("fs");

app.use(express.static(__dirname, { dotfiles: "allow" }));

//setting view engine to ejs and path to views directory
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// web views
app.use("/", viewRouter);

// scss
app.use('/assets', express.static(path.join(__dirname, '../public')));

app.listen(envConfigs.serverPort, function () {
  console.log("Server is running on port ", envConfigs.serverPort);
});
