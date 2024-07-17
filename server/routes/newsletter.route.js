import express from "express";
import { newsletterController } from "../controllers/newsletter.controller.js";
import { verify } from "../utils/verify.js";

const router = express.Router();

router.post("/newsletter", verify, newsletterController);

export default router;
