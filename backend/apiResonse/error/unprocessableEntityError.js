const BaseError = require("./Error");
const httpStatusCode = require("../../enum/HttpStatusCode");

class NotFoundError extends BaseError {
  constructor(message) {
    super(message, httpStatusCode.UNPROCESSABLE_ENTITY);
  }
}

module.exports = NotFoundError;
