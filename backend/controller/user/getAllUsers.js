const { models } = require("../../sequelize/index");
const getAllUsers = async (req, res) => {
  try {
    const usersFound = await models.User.findAll();
    res.status(200).send({ status: "success", respone: usersFound });
  } catch (error) {
    res.status(500).send({ status: "failure", respone: error });
  }
};

module.exports = { getAllUsers };
