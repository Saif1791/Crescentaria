import express from "express";
import { signoutController } from "../controllers/signout.controller.js";

const router = express.Router();

router.post("/signout", signoutController);

export default router;
