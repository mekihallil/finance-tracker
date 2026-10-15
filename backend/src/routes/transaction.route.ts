import { Router } from "express";
import {
  createTransaction,
  deleteTransaction,
  getTransaction,
} from "../controllers/transaction.controller.js";
import { validate } from "../middlewares/validate.middlewares.js";
import { TransactionValidationSchema } from "../validations/transaction.validation.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/", protect,getTransaction);
router.post("/create",protect, validate(TransactionValidationSchema), createTransaction);
router.delete("/delete/:_id",protect, deleteTransaction);

export default router;
