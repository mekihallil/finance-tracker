import { Router } from "express";
import {
  createExpense,
  deleteExpense,
  getExpenseIncome,
} from "../controllers/expenseIncome.controller.js";
import { validate } from "../middlewares/validate.middlewares.js";
import { expenseIncomeValidationSchema } from "../validations/expenseIncome.validation.js";

const router = Router();

router.get("/", getExpenseIncome);
router.post("/create", validate(expenseIncomeValidationSchema), createExpense);
router.delete("/delete/:_id", deleteExpense);

export default router;
