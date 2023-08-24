const Sequelize = require("sequelize");

const sequelize = new Sequelize("blogdb", "admin", "password888", {
  host: "database-1.cfwbui4fxbnc.eu-north-1.rds.amazonaws.com",
  port: "3306",
  dialect: "mysql",
});

module.exports = sequelize;
