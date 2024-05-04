import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    items: {
      type: Array,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    delivered: {
      type: Boolean,
      default: false,
    },
    customerName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
