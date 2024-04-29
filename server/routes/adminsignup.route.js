import express from "express";
import { adminsignupController } from "../controllers/adminsignup.controller.js";

const router = express.Router();

router.post("/admin/signup", adminsignupController);

export default router;
