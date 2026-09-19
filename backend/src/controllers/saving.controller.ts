import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ZodError } from "zod";
import { NotFoundError, sendError } from "../error/error.js";
import {
  createSaving,
  DeleteSaving,
  getSavingProgress,
} from "../service/saving.service.js";
import type { ISaving } from "../validations/saving.validation.js";

// Add savings
export const addSaving = async (
  req: Request<{}, {}, ISaving>,
  res: Response,
) => {
  try {
    const saving = await createSaving(req.body);
    res.status(StatusCodes.CREATED).json(saving);
  } catch (error) {
    if (error instanceof ZodError)
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: error.flatten() });
    sendError(
      res,
      StatusCodes.INTERNAL_SERVER_ERROR,
      "Internal Server error",
      error,
    );
  }
};

// Get Goal Savings
export const getGoalSaving = async (req: Request, res: Response) => {
  try {
    const getGoal = await getSavingProgress();
    res.status(StatusCodes.OK).json(getGoal);
  } catch (error) {
    if (error instanceof NotFoundError)
      return sendError(res, StatusCodes.NOT_FOUND, `${error.message} `);
    sendError(
      res,
      StatusCodes.INTERNAL_SERVER_ERROR,
      "Internal server error",
      error,
    );
  }
};

export const deleteSaving = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  try {
    const { id } = req.params;
    const savingDelete = await DeleteSaving(id);
    if (!savingDelete) {
      return sendError(res, StatusCodes.BAD_REQUEST, "Saving not Found");
    }
    res
      .status(StatusCodes.OK)
      .json({ message: "Saving deleted successfully " });
  } catch (error) {
    sendError(
      res,
      StatusCodes.INTERNAL_SERVER_ERROR,
      "Internal server error",
      error,
    );
  }
};
