const express = require("express");

const router = express.Router();

const Post = require("../models/Post");

router.post("/create", async (req, res) => {

  try {

    const { title, content } = req.body;

    const post = await Post.create({
      title,
      content,
    });

    res.status(201).json({
      message: "Post created successfully",
      post,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});

router.get("/", async (req, res) => {

  try {

    const posts = await Post.findAll();

    res.json(posts);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});

router.put("/:id", async (req, res) => {

  try {

    const { id } = req.params;

    const { title, content } = req.body;

    await Post.update(
      {
        title,
        content
      },
      {
        where: { id }
      }
    );

    res.json({
      message: "Post updated successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});

router.delete("/:id", async (req, res) => {

  try {

    const { id } = req.params;

    await Post.destroy({
      where: { id }
    });

    res.json({
      message: "Post deleted successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});

module.exports = router;cd