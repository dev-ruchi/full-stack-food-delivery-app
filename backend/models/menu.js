import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    enum: ["Appetizers", "MainCourse", "Desserts"],
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  availability: {
    type: Boolean,
    default: true,
  },
});

const Menu = mongoose.models.Menu || mongoose.model("Menu", menuSchema);

export default Menu;
