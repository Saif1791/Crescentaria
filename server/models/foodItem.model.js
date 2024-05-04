import mongoose from "mongoose";
import { Schema } from "mongoose";

const foodItemSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    description: {
      type: String,
      default: "",
    },
    imageUrl: {
      type: String,
      default: "",
    },
    available: {
      type: Boolean,
      default: true,
    },
    provider: {
      type: String,
      default: "Main Canteen",
    },
  },
  { timestamps: true },
  { strict: false }
);

const FoodItem = mongoose.model("FoodItem", foodItemSchema);

export default FoodItem;
