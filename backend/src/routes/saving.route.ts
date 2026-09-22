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

const router = Router();
// saving
router.get("/getsaving", getGoalSaving);
router.post("/create", validate(savingValidateSchema), addSaving);
router.delete(`/delete/:id`, deleteSaving);

// goal
router.get("/goals", goals);
router.patch("/update/:id", addMoneyToGoal);
export default router;
