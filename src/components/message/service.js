const dayjs = require("dayjs");
const Message = require("../../models/message.model");
const { Op } = require("sequelize");

const findMessagesCursorBased = async (cursor) => {
  try {
    const messages = await Message.paginate({
      order: [["createdAt", "DESC"]],
      limit: 10,
      after: cursor || "",
    });
    return messages;
  } catch (err) {
    return null;
  }
};

const createMessage = async (newMessage) => {
  try {
    const createdMessage = await Message.create(newMessage);
    return createdMessage;
  } catch (err) {
    return null;
  }
};

const deleteMessageAllOldMessages = async () => {
  try {
    const expiredDate = dayjs().subtract(2, "day").format("YYYY-MM-DD");
    await Message.destroy({ where: { createdAt: { [Op.lte]: expiredDate } } });
  } catch (err) {
    return null;
  }
};

module.exports = {
  findMessagesCursorBased,
  createMessage,
  deleteMessageAllOldMessages,
};
