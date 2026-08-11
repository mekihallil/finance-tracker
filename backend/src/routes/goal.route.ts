import { Router } from "express";
import { addMoneyToGoal, goals } from "../controllers/goal.controller.js";

const router = Router();

router.get("/goals", goals);
router.patch("/update/:id", addMoneyToGoal);

export default router;
