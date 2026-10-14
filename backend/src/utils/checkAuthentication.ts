import type { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { sendError } from "../error/error.js";

export const checkAuthentication = (
  userId: string | undefined,
  res: Response,
): userId is string => {
  if (!userId) {
    sendError(
      res,
      StatusCodes.UNAUTHORIZED,
      "Authentication required",
    );
    return false;
  }

  return true;
};
