const express = require("express");

const router = express.Router();
const { Posts } = require("../models");
router.get("/", async(req, res) => {
   const listOfPosts = await Posts.findAll()
   res.json(listOfPosts)
});

// router.post();
router.get("/byId/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const post = await Posts.findByPk(id);
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ error: "Post not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});





router.post("/", async (req, res) => {
  const post = req.body;
  
  await Posts.create(post);
  res.json(post);
});
module.exports = router;
