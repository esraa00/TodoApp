const express = require("express");
const app = express();
const sequelize = require("./sequelize/index");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const taskRoutes = require("./routes/task");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");

const { catchErrors, checkIfUserIsAuthorized } = require("./middleware/index");

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);
app.use(checkIfUserIsAuthorized);
app.use("/api/v1/task", taskRoutes);
app.use("/api/v1/user", userRoutes);
app.use(catchErrors);

app.listen(4000, () => {
  console.log("server is listening on port 4000");
});
