import express from "express";
import { signinController } from "../controllers/signin.controller.js";

const router = express.Router();

router.post("/admin/signin", signinController);

export default router;
