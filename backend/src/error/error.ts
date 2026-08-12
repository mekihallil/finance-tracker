import type { Response } from "express";
import type { StatusCodes } from "http-status-codes";

export const sendError = (
  res: Response,
  status: StatusCodes,
  message: string,
  error?: unknown,
): void => {
  if (error != undefined) {
    console.error(message, error);
  }
  res.status(status).json({ message });
};

export class NotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NotFoundError";
  }
}
export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}
export class ZodError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ZodError";
  }
}
