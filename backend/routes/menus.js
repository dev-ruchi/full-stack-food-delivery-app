import "dotenv/config";
import express from "express";
const router = express.Router();

import { create, findAll, findById } from "../store/menu.store.js";


// POST /menuItem -> create a new Item
router.post("/", (req, res) => {
  create(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json(err));
});

// GET /menuItems -> list all menuItems
router.get("/", (req, res) => {
  findAll(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json(err));
});

// // GET /menuItem/:id -> get a Item by id
router.get("/:id", (req, res) => {
  findById(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json(err));
});

export default router;
