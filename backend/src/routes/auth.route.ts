import { Router } from "express";
import { userLogin, userRegister } from "../controllers/ auth.controller.js";
import {
  loginValidationSchema,
  registerValidationSchema,
} from "../validations/auth.validation.js";
import { validate } from "../middlewares/validate.middlewares.js";

const router = Router();
router.post("/register", validate(registerValidationSchema), userRegister);
router.post("/login", validate(loginValidationSchema), userLogin);

export default router;
