const express = require("express");

const router = express.Router();

const Comment = require("../models/Comment");

router.post("/create", async (req, res) => {

  try {

    const { name, text } = req.body;

    const comment = await Comment.create({
      name,
      text,
    });

    res.status(201).json({
      message: "Comment added successfully",
      comment,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});

router.get("/", async (req, res) => {

  try {

    const comments = await Comment.findAll();

    res.json(comments);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});

module.exports = router;