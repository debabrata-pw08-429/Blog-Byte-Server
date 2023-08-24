const express = require("express");
const blogRouter = express.Router();
const { User, BlogPost } = require("../models");

blogRouter.get("/blogposts", async (req, res) => {
  try {
    User.hasMany(BlogPost, { foreignKey: "userID" });
    BlogPost.belongsTo(User, { foreignKey: "userID" });

    const data = await BlogPost.findAll({
      include: [User],
    });

    res.status(200).json({
      isError: false,
      data,
    });
  } catch (error) {
    res.status(400).json({
      isError: true,
      error,
    });
  }
});

blogRouter.post("/blogposts", async (req, res) => {
  try {
    const postData = req.body;
    const data = await BlogPost.create({ ...postData });
    res.status(200).json({
      isError: false,
      data,
    });
  } catch (error) {
    res.status(400).json({
      isError: true,
      error,
    });
  }
});

blogRouter.post("/blogposts/:id", async (req, res) => {
  try {
    const data = await BlogPost.upsert({ id: req.params.id, ...req.body });

    res.status(200).json({
      isError: false,
      data,
    });
  } catch (error) {
    res.status(400).json({
      isError: true,
      error,
    });
  }
});

module.exports = blogRouter;
