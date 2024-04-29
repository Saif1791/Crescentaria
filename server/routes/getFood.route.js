import express from "express";
import { getFoodController } from "../controllers/getFood.controller.js";

const router = express.Router();

router.get("/getFood", getFoodController);

export default router;
