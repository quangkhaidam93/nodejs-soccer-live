const path = require("path");
const Resize = require("../../service/resize");
const { validateFile } = require("./validation");
const { generateResponse } = require("../../utils/response");
const statusType = require("../../constants/statusType");

const uploadImage = async (req, res) => {
  const file = validateFile(req, res);

  const imagePath = path.join(__dirname, "../../../public/images");
  const fileUpload = new Resize(imagePath);
  try {
    const filename = await fileUpload.save(file.buffer);
    const staticUrl = fileUpload.staticPath(filename);
    res.send(
      generateResponse({
        type: statusType.CREATED,
        message: "Upload thành công",
        data: staticUrl,
      })
    );
  } catch (err) {
    res.send(
      generateResponse({
        type: statusType.INTERNAL_SERVER_ERROR,
        message: "Có lỗi xảy ra khi upload file",
      })
    );
  }
};

module.exports = {
  uploadImage,
};
