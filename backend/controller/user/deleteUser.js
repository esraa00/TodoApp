const User = require("../../models/user");
const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const userFound = await User.findOne({ where: { id } });

    if (!userFound)
      return res
        .status(404)
        .send({ status: "failure", response: "user not found" });
    const deletedUser = User.destroy({ where: { id } });

    res
      .status(200)
      .send({ status: "success", message: "user deleted successfully" });
  } catch (error) {
    res.status(500).send({ status: "failure", message: error });
  }
};

module.exports = { deleteUser };
