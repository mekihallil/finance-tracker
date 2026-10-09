import { Router } from "express";
import {
  createTransaction,
  deleteTransaction,
  getTransaction,
} from "../controllers/transaction.controller.js";
import { validate } from "../middlewares/validate.middlewares.js";
import { TransactionValidationSchema } from "../validations/transaction.validation.js";

const router = Router();

router.get("/", getTransaction);
router.post("/create", validate(TransactionValidationSchema), createTransaction);
router.delete("/delete/:_id", deleteTransaction);

export default router;
