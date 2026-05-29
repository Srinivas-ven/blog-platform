const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "blog_db",
  "root",
  "08680868",
  {
    host: "localhost",
    dialect: "mysql",
  }
);

module.exports = sequelize;