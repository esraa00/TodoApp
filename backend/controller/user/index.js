const { createUser } = require("./createUser");
const { deleteUser } = require("./deleteUser");
const { getUser } = require("./getUser");
const { getAllUsers } = require("./getAllUsers");
const { updateUserInfo } = require("./updateUserInfo");
const { updateUserPass } = require("./updateUserPass");

module.exports = {
  createUser,
  deleteUser,
  getUser,
  getAllUsers,
  updateUserInfo,
  updateUserPass,
};
