import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ZodError } from "zod";
import { NotFoundError } from "../error/error.js";
import { createSaving, getSavingProgress } from "../service/saving.service.js";

import { getAmount, getGoals } from "../service/goal.service.js";
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
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal server error" });
  }
};

// Get Goal Savings
export const getGoalSaving = async (req: Request, res: Response) => {
  try {
    const getGoal = await getSavingProgress();
    res.status(StatusCodes.OK).json(getGoal);
  } catch (error) {
    if (error instanceof NotFoundError)
      return res.status(StatusCodes.NOT_FOUND).json({ message: error.message });
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal server error" });
  }
};
