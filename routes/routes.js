import express from "express";
import { DateController } from "../controller/controller.js";

const router = express.Router();

// date route
router.get("/:date?", DateController);

export default router;
