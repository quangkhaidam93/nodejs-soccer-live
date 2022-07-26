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
const CronJob = require("./cron-jobs");
const socketConnection = require("./socket");

app.use(express.static(__dirname, { dotfiles: "allow" }));

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
app.use(
  "/api",
  apiRouter.authRouter,
  apiRouter.userRouter,
  apiRouter.casterRouter,
  apiRouter.clubRouter,
  apiRouter.leagueRouter,
  apiRouter.fileRouter,
  apiRouter.messageRouter,
  apiRouter.roomRouter,
  apiRouter.roleRouter
);

// assets
app.use("/assets", express.static(path.join(__dirname, "../public")));

// serve js
app.use(express.static(path.join(__dirname, "./views/")));

app.use("/admin/views", express.static(path.join(__dirname, "./views/")));

// serve images
// app.user("/images", express.static(path.join(__dirname, '../public/images')))

// 404
// app.get("*", (req, res) => {
//   console.log('alo');
//   res.redirect("/");
// });

db.sync()
  .then(() => {
    const httpServer = http.createServer(app);

    socketConnection(httpServer);

    // Trigger cronjob
    const cronjob = new CronJob();
    cronjob.scheduleDeleteOldMessages();

    httpServer.listen(envConfigs.serverPort, function () {
      console.log("Server is running on port ", envConfigs.serverPort);
    });

    // HTTPS Server
    if (envConfigs.nodeEnv === "prod") {
      const secretPath = path.join(__dirname, "../secrets");

      const privateKey = fs.readFileSync(secretPath + "/privkey.pem", "utf8");
      const certificate = fs.readFileSync(secretPath + "/cert.pem", "utf8");
      const ca = fs.readFileSync(secretPath + "/chain.pem", "utf8");

      const credentials = {
        key: privateKey,
        cert: certificate,
        ca: ca,
      };

      const httpsServer = https.createServer(credentials, app);

      socketConnection(httpsServer);

      httpsServer.listen(envConfigs.serverPortWithSSL, function () {
        console.log(
          "Server is running with SSL on port",
          envConfigs.serverPortWithSSL
        );
      });
    }
  })
  .catch((error) => console.log(error));
