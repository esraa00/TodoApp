const User = require("../../sequelize/models/user");
const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const userFound = await User.findOne({ where: { id } });
    if (!userFound)
      return res
        .status(404)
        .send({ status: "failure", response: "user not found" });
    res.status(200).send({ statu: "success", response: userFound });
  } catch (error) {
    res.status(500).send({ status: "failure", respone: error });
  }
};

module.exports = { getUser };
