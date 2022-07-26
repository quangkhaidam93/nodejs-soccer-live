const messageService = require('./service');
const { generateResponseForArray, generateResponse } = require("../../utils/response");
const statusType = require("../../constants/statusType");
const { isEmptyArray } = require('../../utils/array');

const getMessages = async (req, res) => {
  const cursor = req.body.cursor;
  
  const pagination = await messageService.findMessagesCursorBased(cursor);
  if (pagination) {
    let messages = pagination.edges.map(m => m.node);
    messages = messages.sort((prev, next) => prev.createdAt - next.createdAt);
    const total = pagination.totalCount;
    const hasMore = pagination.pageInfo.hasNextPage;
    const cursor = pagination.pageInfo.endCursor;

    if (messages || isEmptyArray(messages)) {
      res.send(
        generateResponseForArray({
          type: statusType.SUCCESS,
          arrayData: messages,
          message: "Thành công",
          cursor,
          total,
          hasMore
        })
      );
      return;
    }

    res.send(
      generateResponse({
        type: statusType.INTERNAL_SERVER_ERROR,
        message: "Thất bại",
      })
    );

  } else {
    res.send(
      generateResponse({
        type: statusType.INTERNAL_SERVER_ERROR,
        message: "Thất bại",
      })
    );
  }
  
};

module.exports = {
  getMessages,
}