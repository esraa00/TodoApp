const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Role", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "name",
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "description",
    },
  });
};
