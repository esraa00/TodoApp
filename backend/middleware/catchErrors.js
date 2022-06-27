const catchErrors = (err, req, res, next) => {
  res.status(500).send({ status: "failure", message: err });
};

module.exports = catchErrors;
