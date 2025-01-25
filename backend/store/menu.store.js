import Menu from "../models/menu.js";

export function create(data) {
  return Menu.create(data);
}

export function findAll() {
  return Menu.find();
}


export function findById(id) {
  return Menu.findById(id);
} 



