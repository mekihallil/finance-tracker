import { Router } from "express";

import { validate } from "../middlewares/validate.middlewares.js";
import { splitValidatorSchema } from "../validations/split.validation.js";
import { createSplit } from "../controllers/split.controller.js";

const router = Router();

router.post("/create", validate(splitValidatorSchema), createSplit);

export default router;
