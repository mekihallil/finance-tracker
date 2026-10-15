import { Router } from "express";

import { validate } from "../middlewares/validate.middlewares.js";
import { splitValidatorSchema } from "../validations/split.validation.js";
import {
  AddSplit,
  deleteSplitBill,
  getSplit,
} from "../controllers/split.controller.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/create",protect, validate(splitValidatorSchema), AddSplit);
router.get("/splitBills",protect, getSplit);
router.delete(`/delete/:id`,protect, deleteSplitBill);

export default router;
