import express from "express";
import { signUpcontroller } from "../controllers/signup.controller.js";

const router = express.Router();

router.post("/signup", signUpcontroller);

export default router;