import { Router } from "express";
import {
  createTransaction,
  getTransaction,
} from "../controllers/transaction.controller.js";

const router = Router();

router.get("/", getTransaction);
router.post("/create", createTransaction);

export default router;
