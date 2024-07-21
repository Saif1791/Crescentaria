import express from "express";
import { googleAuthController } from "../controllers/googleAuth.controller.js";

const router = express.Router();

router.post("/googleauth", googleAuthController);

export default router;
