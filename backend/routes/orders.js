import express from "express";
import { findAll } from "../store/order.store.js";
import { auth } from "../routes/middlewares/auth.middleware.js";
import { order } from "../services/order.service.js";
import { sendValidationErrorResponse } from "../errorHandler.js";

const router = express.Router();

router.post("/", auth, async (req, res) => {
  try {
    const savedOrder = await order(req.body, req.userId);
    res.status(201).json(savedOrder);
  } catch (error) {
    sendValidationErrorResponse(res, error);
  }
});

router.get("/", auth, async (req, res) => {
  try {
    const data = await findAll(req.body);
    res.status(200).json(data);
  } catch (error) {
    sendValidationErrorResponse(res, error);
  }
});

export default router;

