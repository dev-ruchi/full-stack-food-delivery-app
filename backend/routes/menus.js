import "dotenv/config";
import express from "express";
const router = express.Router();

import * as service from "../services/menu.service.js";
import { sendValidationErrorResponse } from "../errorHandler.js";

router.post("/", async (req, res) => {
  try {
    const data = await service.create(req.body);
    res.status(201).json(data);
  } catch (error) {
    sendValidationErrorResponse(res, error);
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await service.findAll(req.body);
    res.status(200).json(data);
  } catch (error) {
    sendValidationErrorResponse(res, error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const data = await service.findById(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    sendValidationErrorResponse(res, error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const data = await service.update(req.params.id, req.body);
    res.status(200).json(data);
  } catch (error) {
    sendValidationErrorResponse(res, error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const data = await service.deleteById(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    sendValidationErrorResponse(res, error);
  }
});

export default router;
