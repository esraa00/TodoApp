const User = require("../../sequelize/models/user");
const getAllUsers = async (req, res) => {
  try {
    const usersFound = await User.findAll();
    res.status(200).send({ status: "success", respone: usersFound });
  } catch (error) {
    res.status(500).send({ status: "failure", respone: error });
  }
};

module.exports = { getAllUsers };
