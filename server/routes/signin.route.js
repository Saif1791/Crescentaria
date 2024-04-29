import express from "express";
import { signinController } from "../controllers/signin.controller.js";

const router = express.Router();

router.post("/signin", signinController);

export default router;
