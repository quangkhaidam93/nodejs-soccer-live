const authRouter = require("../components/authentication/router");
const userRouter = require("../components/user/router");
const casterRouter = require("../components/caster/router");
const clubRouter = require("../components/club/router");
const leagueRouter = require("../components/league/router");
const fileRouter = require("../components/file/router");
const messageRouter = require("../components/message/router");
const roomRouter = require("../components/room/router");
const roleRouter = require("../components/role/router");

module.exports = {
  authRouter,
  userRouter,
  casterRouter,
  clubRouter,
  leagueRouter,
  fileRouter,
  messageRouter,
  roomRouter,
  roleRouter,
};
