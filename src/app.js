const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const router = require('./routers');
const app = express();

//setting view engine to ejs and path to views directory
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// parse application/json
app.use(bodyParser.json());

// TODO: Database connection

// web views
app.use('/', router.viewRouter);

// apis
app.use('/api', router.authRouter);

app.listen(8080, function () {
  console.log("Server is running on port 8080 ");
});