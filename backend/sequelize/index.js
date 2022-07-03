const Sequelize = require("sequelize");
const { applyAssociation } = require("./associations");

const sequelize = new Sequelize("task", "root", "Esraaguest5056@", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  logging: false,
});

const modelDefiners = [
  require("./models/user"),
  require("./models/role"),
  require("./models/task"),
];

modelDefiners.map((modelDefiner) => {
  modelDefiner(sequelize);
});

(async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("synced correctly with the table");
  } catch (error) {
    console.log(error);
  }
})();

applyAssociation(sequelize);

console.error("all good");
