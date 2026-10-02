import { User } from "../models/auth.models.js";
import bcrypt from "bcrypt";
import {
  loginValidationSchema,
  registerValidationSchema,
  type ILogin,
  type IRegister,
} from "../validations/auth.validation.js";
import { string } from "zod";

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

export const loginUser = async (body: ILogin) => {
  const parsed = loginValidationSchema.parse(body);

  const existingUser = await User.findOne({
    email: parsed.email,
  }).select("+password");

  if (!existingUser) {
    throw new Error("Invalid email or password");
  }

  const isPasswordCorrect = await bcrypt.compare(
    parsed.password,
    existingUser.password,
  );
  if (!isPasswordCorrect) {
    throw new Error("Invalid email or password");
  }
  return {
    id: existingUser.id,
    name: existingUser.name,
    email: existingUser.email,
  };
};
