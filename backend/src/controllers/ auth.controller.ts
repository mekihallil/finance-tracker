import type { Request, Response } from "express";
import { registerUser } from "../service/auth.service.js";
import type { IRegister } from "../validations/auth.validation.js";
import { StatusCodes } from "http-status-codes";
import { sendError } from "../error/error.js";
import { success } from "zod";

export const userRegister = async (
  req: Request<{}, {}, IRegister>,
  res: Response,
) => {
  try {
    const newUser = registerUser(req.body);
    res.status(StatusCodes.CREATED).json({
      success: true,
      message: "User registered successfully",
      data: newUser,
    });
  } catch (error) {
    sendError(
      res,
      StatusCodes.INTERNAL_SERVER_ERROR,
      "Registration failed",
      error,
    );
  }
};
