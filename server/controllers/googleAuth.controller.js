import User from "../models/user.model.js";
import * as crypto from "node:crypto";
import jwt from "jsonwebtoken";

export const googleAuthController = async (req, res) => {
  try {
    const { name, email, UID, avatar } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      const access_token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      res.cookie("access_token", access_token, { httpOnly: true }).json(user);
      return;
    }

    const password = crypto.randomBytes(20).toString("hex");
    const newUser = new User({
      name:
        name.split(" ").join("").toLowerCase() +
        Math.random().toString(36).slice(-4),
      email,
      password,
      UID,
      avatar,
    });
    await newUser.save();
    const access_token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.cookie("access_token", access_token, { httpOnly: true }).json(newUser);
  } catch (err) {
    console.log(err);
    res.status(200).json(`Could not Sign in with Google: ${err}`);
  }
};
