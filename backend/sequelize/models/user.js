const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("User", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /[a-zA-Z]+/,
        len: [2, 10],
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /[a-zA-Z]+/,
        len: [2, 10],
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: { msg: "please provide valid email" },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
