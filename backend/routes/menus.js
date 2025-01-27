import "dotenv/config";
import express from "express";
const router = express.Router();

import * as service from "../services/menu.service.js";
import { sendErrorResponse } from "../errorHandler.js";

router.post("/", async (req, res) => {
  try {
    const data = await service.create(req.body);
    res.status(201).json(data);
  } catch (error) {
    sendErrorResponse(res, err);
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await service.findAll(req.body);
    res.status(200).json(data);
  } catch (error) {
    sendErrorResponse(res, err);
  }
}); 

  
// router.get("/", (req, res) => {
//   findAll(req.body)
//     .then((data) => res.json(data))
//     .catch((err) => res.status(400).json(err));
// });

// router.get("/:id", (req, res) => {
//   findById(req.params.id)
//     .then((data) => res.json(data))
//     .catch((err) => res.status(400).json(err));
// });

// router.put("/:id", (req, res) => {
//   update(req.params.id, req.body)
//     .then((data) => res.json(data))
//     .catch((err) => res.status(400).json(err));
// });

// router.delete("/:id", (req, res) => {
//   deleteById(req.params.id)
//     .then((data) => res.json(data))
//     .catch((err) => res.status(400).json(err));
// });

export default router;
