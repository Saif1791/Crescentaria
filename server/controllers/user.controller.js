import User from "../models/user.model.js";
import brcyptjs from "bcryptjs";

export const userController = (req, res) => {
  res.status(200).json("Hello Saif, this was a success!");
};

export const updateUser = async (req, res, next) => {
  if (req.params.id != req.user.id) {
    res.json("Unauthorized!");
  }

  try {
    if (req.body.password) {
      req.body.password = brcyptjs.hashSync(req.body.password, 17);
    }
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          name: req.body.name,
          email: req.body.email,
          UID: req.body.UID,
          password: req.body.password,
          avatar: req.body.avatar,
        },
      },
      { new: true }
    );

    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (err) {
    console.log(err);
    res.json(err.message);
  }
};
