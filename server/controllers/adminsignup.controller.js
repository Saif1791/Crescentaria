import Admin from "../models/admin.model.js";
import bcryptjs from "bcryptjs";

export const adminsignupController = async (req, res, next) => {
  try {
    const { name, email, password, UID, avatar } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 17);

    const newAdmin = new Admin({
      name: name,
      email: email,
      password: hashedPassword,
      UID: UID,
      avatar: avatar,
    });

    await newAdmin.save();
    res.status(200).json(newAdmin);
  } catch (err) {
    console.log(err);
    res.json(err.message);
  }
};
