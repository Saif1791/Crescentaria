import Order from "../models/order.model.js";
export const orderCreateController = async (req, res, next) => {
  const { items, totalPrice, delivered, customerName } = req.body;
  try {
    const newOrder = new Order({
      items: items,
      totalPrice: totalPrice,
      delivered: delivered,
      customerName: customerName,
    });
    await newOrder.save();

    res.status(200).json("Order Placed successfully!");
  } catch (err) {
    console.log(err);
    res.status(404).json(err);
  }
};
