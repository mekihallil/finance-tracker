import { Router } from "express";
import { addSaving, getGoalSaving } from "../controllers/saving.controller.js";
import { validate } from "../middlewares/validate.middlewares.js";
import { savingValidateSchema } from "../validations/saving.validation.js";

const router = Router();

router.get("/getsaving", getGoalSaving);
router.post("/create", validate(savingValidateSchema), addSaving);
export default router;
