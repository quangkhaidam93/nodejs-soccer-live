const authRouter = require("../components/authentication/router");
const userRouter = require("../components/user/router");
const casterRouter = require("../components/caster/router");
const clubRouter = require("../components/club/router");
const leagueRouter = require("../components/league/router");
const fileRouter = require("../components/file/router");
const messageRoute = require("../components/message/router");

module.exports = {
  authRouter,
  userRouter,
  casterRouter,
  clubRouter,
  leagueRouter,
  fileRouter,
  messageRoute,
};
