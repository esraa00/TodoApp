const BaseError = require("./Error");
const httpStatusCode = require("../../enum/HttpStatusCode");

class NotFoundError extends BaseError {
  constructor(message) {
    super(message, httpStatusCode.UNAUTHORIZED);
  }
}

module.exports = NotFoundError;
