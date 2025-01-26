import express from "express";
import Order from "../models/order.js";
import Menu from "../models/menu.js";

import { findAll, create } from "../store/order.store.js";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { userId, items } = req.body;

    // Validate menu items and calculate total
    const menuItemIds = items.map((item) => item.menuItemId);
    const menuItems = await Menu.find({ _id: { $in: menuItemIds } });

    const totalAmount = menuItems.reduce((total, menuItem) => {
      const itemQuantity = items.find(
        (i) => i.menuItemId === menuItem._id.toString()
      ).quantity;
      return total + menuItem.price * itemQuantity;
    }, 0);

    const savedOrder = await create({
      userId,
      items,
      totalAmount,
    });

    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(400).json({
      message: "Order creation failed",
      error: error.message,
    });
  }
});

// GET /orders -> list all orders
router.get("/", (req, res) => {
  findAll(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json(err));
});

export default router;
