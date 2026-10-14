import { User } from "../models/auth.models.js";
import bcrypt from "bcrypt";
import {
  loginValidationSchema,
  registerValidationSchema,
  type ILogin,
  type IRegister,
} from "../validations/auth.validation.js";
import { generateToken } from "../utils/generateToken.js";

export const registerUser = async (body: IRegister) => {
  const { name, email, password } = registerValidationSchema.parse(body);

  const normalizedEmail = email.trim().toLocaleLowerCase();

  const existingUser = await User.findOne({ email: normalizedEmail });
  if (existingUser) {
    return {
      success: false,
      message: "Email is already registered",
      data: null,
    };
  }
  const hashPassword = await bcrypt.hash(password, 12);
  const newUser = await User.create({
    name: name,
    email: normalizedEmail,
    password: hashPassword,
  });

  const token = generateToken(newUser._id.toString());

  return {
    success: true,
    message: "User registered successfully",
    data: {
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
    },
    token,
  };
};

export const loginUser = async (body: ILogin) => {
  const { email, password } = loginValidationSchema.parse(body);

  const normalizedEmail = email.trim().toLocaleLowerCase();
  
  const existingUser = await User.findOne({
    email: normalizedEmail,
  }).select("+password");

  if (!existingUser) {
    return {
      success: false,
      message: "Invalid email or password",
      data: null,
    };
  }

  const isPasswordCorrect = await bcrypt.compare(
    password,
    existingUser.password,
  );
  if (!isPasswordCorrect) {
    return {
      success: false,
      message: "Invalid email or password",
      data: null,
    };
  }

  const token = generateToken(existingUser._id.toString());
  return {
    success: true,
    message: "User login successfully",
    data: {
      id: existingUser._id,
      name: existingUser.name,
      email: existingUser.email,
    },
    token,
  };
};
