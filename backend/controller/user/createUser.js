const User = require("../../sequelize/models/user");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    res
      .status(200)
      .send({ status: "success", response: "user created successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { createUser };
