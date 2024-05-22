import User from "../models/user.model.js";
import Admin from "../models/admin.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const signinController = async (req, res) => {
  const { UID } = req.body;
  try {
    const user = await User.findOne({ UID: UID });
    //|| (await Admin.findOne({ UID: UID }))
    if (!user) {
      res.status(404).json("User not found!");
      return;
    }
    const { password, ...rest } = user._doc;
    const userPassword = bcryptjs.compareSync(req.body.password, password);

    if (!userPassword) {
      res.status(404).json("Invalid Password!");
      return;
    }

    var access_token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res
      .cookie("access_token", access_token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (err) {
    console.log(err);
  }
};
