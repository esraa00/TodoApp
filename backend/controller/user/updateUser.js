const User = require("../../models/user");
const bcrypt = require("bcrypt");

const updateUser = async (req, res) => {
  const id = req.params.id;
  const { firstName, lastName, email, password } = req.body;

  try {
    const userFound = await User.findOne({ where: { id } });
    if (!userFound)
      return res
        .status(404)
        .send({ status: "failure", response: "user not found" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const updatedUser = await User.update(
      { firstName, lastName, email, password: hashedPassword },
      { where: { id } }
    );
    res
      .status(200)
      .send({ status: "success", response: "user updated successfully" });
  } catch (error) {
    res.status(500).send({ status: "failure", response: error });
  }
};

module.exports = { updateUser };
