const Sequelize = require("sequelize");
const { applyAssociation } = require("./associations");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.HOST,
    dialect: "mysql",
    logging: false,
  }
);

const modelDefiners = [
  require("./models/user"),
  require("./models/role"),
  require("./models/task"),
];

modelDefiners.map((modelDefiner) => {
  modelDefiner(sequelize);
});

applyAssociation(sequelize);

const checkDatabaseConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("connected to the database successfully");
  } catch (error) {
    console.error(error);
  }
};

const syncTableWithModel = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("synced correctly with the table");
  } catch (error) {
    console.log(error);
  }
};

const initializeDatabase = async () => {
  await checkDatabaseConnection();
  await syncTableWithModel();
};

module.exports = { initializeDatabase, sequelize };
