const response = require("../apiResonse/response");
const catchErrors = (err, req, res, next) => {
  var statusCode = 422;
  if (err.errors) {
    const errors = err.errors;
    const finalErrors = errors.map((error) => {
      if (error.type == "unique violation") {
        statusCode = 409;
      }
      return error.message;
    });

    return res.status(statusCode).send(finalErrors);
  } else if (err) {
    res.send(err);
  } else {
    response(res, err.statusCode, err.message);
  }
};

module.exports = { catchErrors };
