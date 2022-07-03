const { models } = require("../../sequelize/index");
const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const userFound = await models.User.findOne({ where: { id } });

    if (!userFound)
      return res
        .status(404)
        .send({ status: "failure", response: "user not found" });
    const deletedUser = models.User.destroy({ where: { id } });

    res
      .status(200)
      .send({ status: "success", message: "user deleted successfully" });
  } catch (error) {
    res.status(500).send({ status: "failure", message: error });
  }
};

module.exports = { deleteUser };
