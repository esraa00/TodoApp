require("dotenv").config();
const express = require("express");
const app = express();
const { initializeDatabase } = require("./sequelize/index");
const cookieParser = require("cookie-parser");

const taskRoutes = require("./routes/task");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");

const {
  catchErrors,
  checkIfUserIsAuthenticated,
  getUserAuthorization,
} = require("./middleware/index");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);
app.use(checkIfUserIsAuthenticated);
app.use(getUserAuthorization);
app.use("/api/v1/task", taskRoutes);
app.use("/api/v1/user", userRoutes);
app.use(catchErrors);

module.exports = { app, initializeDatabase };
