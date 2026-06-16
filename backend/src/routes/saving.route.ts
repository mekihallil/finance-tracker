import { Router } from "express";
import {
  addSaving,
  getGoalSaving,
  goals,
} from "../controllers/saving.controller.js";
import { validate } from "../middlewares/validate.middlewares.js";
import { savingValidateSchema } from "../validations/saving.validation.js";

const router = Router();

router.post("/", validate(savingValidateSchema), addSaving);
router.get("/getsaving", getGoalSaving);
router.get("/goals", goals);

export default router;
