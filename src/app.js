const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const viewRouter = require("./routers/view.router");
const apiRouter = require("./routers/api.router");
const app = express();
const envConfigs = require('../config/environment');

//setting view engine to ejs and path to views directory
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// parse application/json
app.use(bodyParser.json());

// Database connection
const db = require("./database");
db.authenticate()
  .then(() => {
    console.log("Database connected...");
  })
  .catch((err) => {
    console.log("Error: " + err);
  });

// web views
app.use("/", viewRouter);

// apis
app.use("/api", apiRouter.authRouter);

db.sync().then(() => {
  app.listen(envConfigs.serverPort, function () {
    console.log("Server is running on port ", envConfigs.serverPort);
  });
}).catch((error) => console.log(error));
