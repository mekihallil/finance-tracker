import { Router } from "express";
import {
  createExpense,
  deleteExpense,
  getExpense,
  getSummary,
  getmonthlyExpense,
} from "../controllers/expense.controller.js";
import { validate } from "../middlewares/validate.middlewares.js";
import { validationSchema } from "../validations/expense.validation.js";

const router = Router();

router.get("/", getExpense);
router.get("/summary", getSummary);
router.get("/monthly-expense", getmonthlyExpense);
router.post("/create", validate(validationSchema), createExpense);
router.delete("/delete/:_id", deleteExpense);

export default router;
