import Menu from "../models/menu.js";
import { create } from "../store/order.store.js";

export async function order(data, userId) {
  const { items } = data;

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

  return savedOrder;
}
