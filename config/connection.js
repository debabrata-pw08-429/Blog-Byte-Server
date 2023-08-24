const Sequelize = require("sequelize");

const sequelize = new Sequelize("blog_db", "root", "tC]@2ZK5rz,J~lT", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
