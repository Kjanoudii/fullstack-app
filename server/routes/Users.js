const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await Users.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const newUser = await Users.create({
      username,
      password: hashedPassword,
    });

    res.json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the user by username
    const user = await Users.findOne({ where: { username } });
    if (!user) {
      return res.status(404).json({ error: "User does not exist" });
    }

    // Compare passwords
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ error: "Wrong username and password combination" });
    }

    // Passwords match, user logged in successfully
    res.json({ message: "You logged in successfully" });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
