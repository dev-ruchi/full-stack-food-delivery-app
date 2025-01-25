import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID is required"],
    },
    items: [
      {
        menuItemId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Menu",
          required: [true, "Menu item ID is required"],
        },
        quantity: {
          type: Number,
          required: [true, "Quantity is required"],
          min: [1, "Quantity must be at least 1"],
        },
      },
    ],
    totalAmount: {
      type: Number,
      required: [true, "Total amount is required"],
      min: [0, "Total amount cannot be negative"],
    },
    status: {
      type: String,
      enum: {
        values: ["Pending", "Completed", "Cancelled"],
        message: "Status must be one of: Pending, Completed, or Cancelled",
      },
      default: "Pending",
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
