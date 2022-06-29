const { generateResponse } = require("../../utils/response");
const statusType = require("../../constants/statusType");

const validateFile = (req, res) => {
  const file = req.file;
  if (!file) {
    res.send(
      generateResponse({
        type: statusType.BAD_REQUEST,
        message: "Không có file",
      })
    );
  }

  return file;
};

module.exports = {
  validateFile
}
