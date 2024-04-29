import FoodItem from "../models/foodItem.model.js";

export const getFoodController = async (req, res) => {
  try {
    const fooditems = await FoodItem.find({});

    if (fooditems) {
      res.status(200).json(fooditems);
      return;
    }
  } catch (err) {
    res.json(err);
  }
};
