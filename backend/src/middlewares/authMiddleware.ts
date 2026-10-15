import type { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";
import { sendError } from "../error/error.js";
export interface AuthRequest extends Request {
  userId?: string;
}

export const protect = (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith("Bearer ")) {
      return sendError(
        res,
        StatusCodes.UNAUTHORIZED,
        "Authentication required",
      );
    }

    const token = authHeader?.startsWith("Bearer ")
      ? authHeader.slice(7)
      : undefined;

    const secret = process.env.JWT_SECRET;

    if (!token) {
      return sendError(res, StatusCodes.UNAUTHORIZED, "Token is missing");
    }
    if (!secret) {
      throw new Error("JWT_SECRET is not configured");
    }

    const decoded = jwt.verify(token, secret);

    if (typeof decoded === "string" || typeof decoded.userId !== "string") {
      return sendError(res, StatusCodes.UNAUTHORIZED, "Invalid token");
    }
    req.userId = decoded.userId;
    next();
  } catch (error) {
    const { JsonWebTokenError, TokenExpiredError } = jwt;
    if (
      error instanceof JsonWebTokenError ||
      error instanceof TokenExpiredError
    ) {
      return sendError(
        res,
        StatusCodes.UNAUTHORIZED,
        "invalid or expired token",
      );
    }
    return sendError(
      res,
      StatusCodes.INTERNAL_SERVER_ERROR,
      "Authentication failed",
      error,
    );
  }
};
