import { Router } from "express";
import {
  addMoneyToGoal,
  addSaving,
  deleteSaving,
  getGoalSaving,
  goals,
} from "../controllers/saving.controller.js";
import { validate } from "../middlewares/validate.middlewares.js";
import { savingValidateSchema } from "../validations/saving.validation.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = Router();
// saving
router.get("/getsaving", protect, getGoalSaving);
router.post("/create", protect, validate(savingValidateSchema), addSaving);
router.delete(`/delete/:id`, protect, deleteSaving);

// goal
router.get("/goals", protect, goals);
router.patch("/update/:id", protect, addMoneyToGoal);

export default router;
