const conflictError = require("./conflictError");
const forbiddenError = require("./forbiddenError");
const internalServerError = require("./internalServerError");
const notFoundError = require("./notFoundError");
const unauthorizedError = require("./unauthorizedError");
const unprocessableEntityError = require("./unprocessableEntityError");

module.exports = {
  conflictError,
  forbiddenError,
  internalServerError,
  notFoundError,
  unauthorizedError,
  unprocessableEntityError,
};
