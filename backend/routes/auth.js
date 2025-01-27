import express from "express";
const router = express.Router();

import { login, register } from "../services/auth.service.js";
import { sendErrorResponse } from "../errorHandler.js";

router.post("/register", async (req, res) => {
  try {
    const { savedUser, token } = await register(req.body);

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: savedUser._id,
        username: savedUser.username,
      },
      token,
    });
  } catch (err) {
    sendErrorResponse(res, err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { user, token } = login(req.body);

    res.status(200).json({
      message: "Login successful",
      user: { id: user._id, username: user.username },
      token,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
