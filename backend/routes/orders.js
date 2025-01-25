import express from "express";
import Order from "../models/Order.js";
import Menu from "../models/Menu.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { userId, items } = req.body;

    // Validate menu items and calculate total
    const menuItemIds = items.map((item) => item.menuItemId);
    const menuItems = await Menu.find({ _id: { $in: menuItemIds } });

    const totalAmount = menuItems.reduce((total, menuItem, index) => {
      const itemQuantity = items.find(
        (i) => i.menuItemId === menuItem._id.toString()
      ).quantity;
      return total + menuItem.price * itemQuantity;
    }, 0);

    // Create and save order
    const newOrder = new Order({
      userId,
      items,
      totalAmount,
    });

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(400).json({
      message: "Order creation failed",
      error: error.message,
    });
  }
});

export default router;
