import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signUpcontroller = async (req, res, next) => {
  try {
    const { name, email, password, UID, avatar } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 17);
    const existingUser = await User.findOne({ UID: UID });

    if (existingUser) {
      res.json("User Already exists!");
      return;
    }
    const newUser = new User({
      name: name,
      email: email,
      password: hashedPassword,
      UID: UID,
      avatar: avatar,
    });

    await newUser.save();
    res.status(200).json(newUser);
  } catch (err) {
    res.json(err.message);
  }
};
