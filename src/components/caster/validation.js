const { generateResponse } = require("../../utils/response");
const statusType = require("../../constants/statusType");

const validateCasterId = (req, res) => {
  const casterId = req.params.id;

  if (!casterId) {
    res.send(
      generateResponse({
        type: statusType.BAD_REQUEST,
        message: "Không có caster id",
      })
    );
  }

  return casterId;
};

const validateCasterObject = (req, res) => {
  const caster = req.body.data;

  if (!caster) {
    res.send(
      generateResponse({
        type: statusType.BAD_REQUEST,
        message: "Body rỗng",
      })
    );
  }

  delete caster.id;

  return caster;
};

module.exports = {
  validateCasterId,
  validateCasterObject,
};
