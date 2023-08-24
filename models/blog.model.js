const { DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

const BlogPost = sequelize.define("BlogPost", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  summary: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  userID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = BlogPost;
