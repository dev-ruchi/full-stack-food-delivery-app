import Order from "../models/order.js";

export function findAll() {
  return Order.find();
}

export function create(data) {
  return Order.create(data);
}
