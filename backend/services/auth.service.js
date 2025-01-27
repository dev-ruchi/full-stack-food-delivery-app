import User from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { throwErrorWithStatus } from "../errorHandler.js";

function generateToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
}

export async function register(data) {
  const { username, password } = data;

  if (!username || !password) {
    throwErrorWithStatus(400, "Username and password are required");
  }

  const existingUser = await User.findOne({ username });

  if (existingUser) {
    throwErrorWithStatus(400, "Username is already taken");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  
  const newUser = new User({
    username,
    password: hashedPassword,
  });

  const savedUser = await newUser.save();

  const token = generateToken({ userId: savedUser._id });

  return {
    savedUser,
    token,
  };
}

export async function login(data) {
  const { username, password } = data;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  const user = await User.findOne({ username });

  if (!user) {
    throw new Error("User not found");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Invalid credentials");
  }

  const token = generateToken({ userId: user._id, username: user.username });

  return {
    user,
    token,
  };
}
