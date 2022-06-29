const { generateResponse } = require("../../utils/response");
const statusType = require("../../constants/statusType");

const validateClubId = (req, res) => {
  const clubId = req.params.id;

  if (!clubId) {
    res.send(
      generateResponse({
        type: statusType.BAD_REQUEST,
        message: "Không có caster id",
      })
    );
  }

  return clubId;
};

const validateClubObject = (req, res) => {
  const club = req.body.data;

  if (!club) {
    res.send(
      generateResponse({
        type: statusType.BAD_REQUEST,
        message: "Body rỗng",
      })
    );
  }

  delete club.id;

  return club;
};

module.exports = {
  validateClubId,
  validateClubObject,
};
