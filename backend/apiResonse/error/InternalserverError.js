const BaseError = require("./Error");
const httpStatusCode = require("../../enum/HttpStatusCode");

class ServerError extends BaseError {
  constructor(message) {
    super(message, httpStatusCode.INTERNAL_SERVER);
  }
}

module.exports = ServerError;
