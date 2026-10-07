import { User } from "../models/auth.models.js";
import bcrypt from "bcrypt";
import {
  loginValidationSchema,
  registerValidationSchema,
  type ILogin,
  type IRegister,
} from "../validations/auth.validation.js";

export const registerUser = async (body: IRegister) => {
  const parsed = registerValidationSchema.parse(body);
  const existingUser = await User.findOne({ email: parsed.email });
  if (existingUser) {
    return {
      success: false,
      message: "Email is already registered",
      data: null,
    };
  }
  const hashPassword = await bcrypt.hash(parsed.password, 12);
  const newUser = await User.create({
    name: parsed.name,
    email: parsed.email,
    password: hashPassword,
  });
  return {
    success: true,
    message: "User registered successfully",
    data: {
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
    },
  };
};

export const loginUser = async (body: ILogin) => {
  const parsed = loginValidationSchema.parse(body);

  const existingUser = await User.findOne({
    email: parsed.email,
  }).select("+password");

  if (!existingUser) {
    return {
      success: false,
      message: "Invalid email or password",
      data: null,
    };
  }

  const isPasswordCorrect = await bcrypt.compare(
    parsed.password,
    existingUser.password,
  );
  if (!isPasswordCorrect) {
    return {
      success: false,
      message: "Invalid email or password",
      data: null,
    };
  }
  return {
    success: true,
    message: "User login successfully",
    data: {
      id: existingUser.id,
      name: existingUser.name,
      email: existingUser.email,
    },
  };
};
