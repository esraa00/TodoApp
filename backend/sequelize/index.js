const Sequelize = require("sequelize");
const { applyAssociation } = require("./associations");

const sequelize = new Sequelize("task", "root", "Esraaguest5056@", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  logging: false,
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("connected to the database successfully");
  } catch (error) {
    console.log(error);
  }
})();

const modelDefiners = [
  require("./models/user"),
  require("./models/role"),
  require("./models/task"),
];

modelDefiners.map((modelDefiner) => {
  modelDefiner(sequelize);
});

applyAssociation(sequelize);

(async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("synced correctly with the table");
  } catch (error) {
    console.log(error);
  }
})();

module.exports = sequelize;
