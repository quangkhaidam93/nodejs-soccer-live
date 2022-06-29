/*
  Response type:
  - SUCCESS: 200
  - CREATED: 201
  - SEE OTHER: 303
  - BAD REQUEST: 400
  - UNAUTHORIZED: 401 - Lack of token or invalid token
  - FORBIDDEN: 403 - Has token but refused
  - NOT FOUND: 404
  - CONFLICT: 409 => server fault, not client's
  - INTERNAL SERVER ERROR: 500
*/

const statusType = require("../constants/statusType");

function transformStatusTypeToStatusCode(type) {
  switch (type) {
    case statusType.SUCCESS:
      return 200;
    case statusType.CREATED:
      return 201;
    case statusType.SEE_OTHER:
      return 303;
    case statusType.BAD_REQUEST:
      return 400;
    case statusType.UNAUTHORIZED:
      return 401;
    case statusType.FORBIDDEN:
      return 403;
    case statusType.NOT_FOUND:
      return 404;
    case statusType.CONFLICT:
      return 409;
    case statusType.INTERNAL_SERVER_ERROR:
      return 500;
    default:
      return 200;
  }
}

function generateResponse({ type, data, message }) {
  return {
    statusCode: transformStatusTypeToStatusCode(type),
    data,
    message,
  };
}

function generateResponseForArray({ type, arrayData, message }) {
  return {
    statusCode: transformStatusTypeToStatusCode(type),
    arrayData,
    message,
  };
}

module.exports = {
  generateResponse,
  generateResponseForArray,
};
