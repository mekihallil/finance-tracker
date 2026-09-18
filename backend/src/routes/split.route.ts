import { Router } from "express";

import { validate } from "../middlewares/validate.middlewares.js";
import { splitValidatorSchema } from "../validations/split.validation.js";
import {
  AddSplit,
  deleteSplitBill,
  getSplit,
} from "../controllers/split.controller.js";

const router = Router();

router.post("/create", validate(splitValidatorSchema), AddSplit);
router.get("/splitBills", getSplit);
router.delete(`/delete/:id`, deleteSplitBill);

export default router;
