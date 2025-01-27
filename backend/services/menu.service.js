import * as store from "../store/menu.store.js";

export async function create(data) {
  return store.create(data);
}

export async function findAll() {
  return store.findAll();
} 

export async function findById(id) {
  return store.findById(id);
} 
 
export async function update(id, data) {
  return store.update(id, data);
} 

export async function deleteById(id) {
  return store.deleteById(id);
}

