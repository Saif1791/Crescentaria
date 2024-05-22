import express from "express";
import {
  getOrderStatus,
  payController,
} from "../controllers/pay.controller.js";
import { verify } from "../utils/verify.js";

const router = express.Router();

router.post("/pay", verify, payController);
router.get("/status/:orderid", verify, getOrderStatus);

export default router;
