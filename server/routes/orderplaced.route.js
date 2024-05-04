import express from "express";
import { orderCreateController } from "../controllers/orderCreate.controller.js";
import { verify } from "../utils/verify.js";

const router = express.Router();

router.post("/create", verify, orderCreateController);

export default router;
