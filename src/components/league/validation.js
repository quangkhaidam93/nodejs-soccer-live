const { generateResponse } = require("../../utils/response");
const statusType = require("../../constants/statusType");

const validateLeagueId = (req, res) => {
  const leagueId = req.params.id;

  if (!leagueId) {
    res.send(
      generateResponse({
        type: statusType.BAD_REQUEST,
        message: "Không có league id",
      })
    );
  }

  return leagueId;
};

const validateLeagueObject = (req, res) => {
  const league = req.body.data;

  if (!league) {
    res.send(
      generateResponse({
        type: statusType.BAD_REQUEST,
        message: "Body rỗng",
      })
    );
  }

  delete league.id;

  return league;
};

module.exports = {
  validateLeagueId,
  validateLeagueObject,
};
