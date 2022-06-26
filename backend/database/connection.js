const Sequelize = require("sequelize");

const sequelize = new Sequelize("task", "root", "Esraaguest5056@", {
  host: "127.0.0.1",
  dialect: "mysql",
  logging: false,
});

const connectToDatabase = () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log("you connected to the database successfully");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = connectToDatabase;
