const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("User", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /[a-zA-Z]+/,
        min: 2,
        notNull: {
          msg: "first name can't be empty",
        },
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /[a-zA-Z]+/,
        min: 2,
        notNull: {
          msg: "lastName can't be empty",
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: "email is already taken",
      },
      validate: {
        isEmail: { msg: "email is not valid" },
        notNull: { msg: "email can't be empty" },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "password can't be empty",
        },
      },
    },
  });
};
