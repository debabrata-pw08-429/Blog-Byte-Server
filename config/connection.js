const Sequelize = require("sequelize");

const sequelize = new Sequelize("blog_db", "admin", "password333", {
  host: "blogdb.cfwbui4fxbnc.eu-north-1.rds.amazonaws.com",
  port: "3306",
  dialect: "mysql",
});

module.exports = sequelize;
