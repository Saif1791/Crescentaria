import express from "express";
import { updateUser, userController } from "../controllers/user.controller.js";
import { verify } from "../utils/verify.js";

const router = express.Router();

router.get("/test", userController);
router.post("/update/:id", verify, updateUser);

export default router;
