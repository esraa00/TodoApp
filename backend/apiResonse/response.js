const response = (res, statusCode, message) => {
  const status = statusCode == /^2[0-9]{2}&/ ? "success" : "failure";
  return res.status(statusCode).send({ status, message });
};
module.exports = response;
