import User from "../models/user.js"

export function create(data) {
    return User.create(data);
}