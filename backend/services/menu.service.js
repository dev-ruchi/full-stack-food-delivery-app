import * as store from "../store/menu.store.js";

export async function create(data) {
  return store.create(data);
}

export async function findAll() {
  return store.findAll();
} 
