const dayjs = require("dayjs");
const Message = require("../../models/message.model");
const { Op } = require('sequelize');

const findMessagesCursorBased = async (cursor) => {
  const messages = await Message.paginate({
    order: [['createdAt', 'DESC']],
    limit: 10,
    after: cursor || '',
  });
  return messages;
};

const createMessage = async (newMessage) => {
  const createdMessage = await Message.create(newMessage);
  return createdMessage;
};

const deleteMessageAllOldMessages = async () => {
  const expiredDate = dayjs().subtract(2, "day").format('YYYY-MM-DD');
  await Message.destroy({ where: { createdAt: { [Op.lte]: expiredDate } } });
};

module.exports = {
  findMessagesCursorBased,
  createMessage,
  deleteMessageAllOldMessages,
};
