import { Router } from "express";
import {
  createTransaction,
  deleteTransaction,
  getTransaction,
  updateTransaction,
} from "../controllers/transaction.controller.js";
import { validate } from "../middlewares/validate.middlewares.js";
import { validationSchema } from "../validations/transaction.validation.js";

const router = Router();

router.get("/", getTransaction);
router.post("/create", validate(validationSchema), createTransaction);
router.patch("/update/:_id",validate(validationSchema) , updateTransaction);
router.delete("/delete/:_id", deleteTransaction);

export default router;
