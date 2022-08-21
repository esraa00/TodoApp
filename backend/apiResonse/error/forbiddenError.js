const BaseError = require("./Error");
const httpStatusCode = require("../../enum/HttpStatusCode");

class NotFoundError extends BaseError {
  constructor(message) {
    super(message, httpStatusCode.NOT_FOUND);
  }
}

module.exports = NotFoundError;
