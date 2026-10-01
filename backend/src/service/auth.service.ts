import { User } from "../models/auth.models.js";
import bcrypt from "bcrypt";
import {
  registerValidationSchema,
  type IRegister,
} from "../validations/auth.validation.js";

export const registerUser = async (body: IRegister) => {
  const parsed = registerValidationSchema.parse(body);
  const existingUser = await User.find({ email: parsed.email });
  if (existingUser) {
    throw new Error("Email is already registered");
  }
  const hashPassword = await bcrypt.hash(parsed.password, 12);
  const newUser = await User.create({
    name: parsed.name,
    email: parsed.email,
    password: hashPassword,
  });
  return {
    id: newUser._id,
    name: newUser.name,
    email: newUser.email,
  };
};
