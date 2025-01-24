import express from "express";
const router = express.Router();

import { create } from "../store/user.store.js";

router.post("/register", (req, res) => {
  create(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json(err));
});

export default router;

