import { Router } from "express";
import {
  createTransaction,
  deleteTransaction,
  getTransactionIncome,
} from "../controllers/transaction.controller.js";
import { validate } from "../middlewares/validate.middlewares.js";
import { TransactionValidationSchema } from "../validations/transaction.validation.js";

const router = Router();

router.get("/", getTransactionIncome);
router.post("/create", validate(TransactionValidationSchema), createTransaction);
router.delete("/delete/:_id", deleteTransaction);

export default router;
