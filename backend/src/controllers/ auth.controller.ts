import type { Request, Response } from "express";
import { loginUser, registerUser } from "../service/auth.service.js";
import type { ILogin, IRegister } from "../validations/auth.validation.js";
import { StatusCodes } from "http-status-codes";
import { sendError } from "../error/error.js";
import { success } from "zod";

export const userRegister = async (
  req: Request<{}, {}, IRegister>,
  res: Response,
) => {
  try {
    const newUser = await registerUser(req.body);
    res.status(StatusCodes.CREATED).json(newUser);
  } catch (error) {
    sendError(
      res,
      StatusCodes.INTERNAL_SERVER_ERROR,
      "Registration failed",
      error,
    );
  }
};

export const userLogin = async (
  req: Request<{}, {}, ILogin>,
  res: Response,
) => {
  try {
    const userLogin = await loginUser(req.body);
    res.status(StatusCodes.OK).json(userLogin);
  } catch (error) {
    sendError(res, StatusCodes.INTERNAL_SERVER_ERROR, "login failed", error);
  }
};
