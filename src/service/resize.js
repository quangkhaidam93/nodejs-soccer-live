const sharp = require("sharp");
const uuid = require("uuid");
const path = require("path");
const envConfigs = require("../../config/environment");

class Resize {
  constructor(folder) {
    this.folder = folder;
  }

  async save(buffer) {
    const filename = Resize.filename();
    const filepath = this.filepath(filename);

    await sharp(buffer)
      .resize(300, 300, {
        fit: sharp.fit.inside,
        withoutEnlargement: true,
      })
      .toFile(filepath);

    return filename;
  }

  static filename() {
    return `${uuid.v4()}.png`;
  }

  filepath(filename) {
    return path.resolve(`${this.folder}/${filename}`);
  }

  staticPath(filename) {
    return envConfigs.serverDomain + '/assets/images/' + filename;
  }
}

module.exports = Resize;
