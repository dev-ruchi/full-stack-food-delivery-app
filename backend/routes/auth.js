import "dotenv/config";
import express from "express";
const router = express.Router();
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import User from "../models/user.js";

function generateToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
}

router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validate input
    if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required" });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const newUser = new User({
      username,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    // Generate a token
    const token = generateToken({ userId: savedUser._id });

    // Respond with the user data and token
    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: savedUser._id,
        username: savedUser.username,
      },
      token,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }

});

export default router;
