import { Router } from "express";
import {
  addMoneyToGoal,
  addSaving,
  getGoalSaving,
  goals,
} from "../controllers/saving.controller.js";
import { validate } from "../middlewares/validate.middlewares.js";
import { savingValidateSchema } from "../validations/saving.validation.js";

const router = Router();

router.get("/getsaving", getGoalSaving);
router.get("/goals", goals);
router.post("/create", validate(savingValidateSchema), addSaving);
router.patch("/update/:id", addMoneyToGoal);
export default router;
