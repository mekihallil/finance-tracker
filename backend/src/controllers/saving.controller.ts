import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ZodError } from "zod";
import { NotFoundError, sendError } from "../error/error.js";
import {
  createSaving,
  DeleteSaving,
  getSavingProgress,
} from "../service/saving.service.js";
import { getAmount, getGoals } from "../service/saving.service.js";
import type { AuthRequest } from "../middlewares/authMiddleware.js";
import { checkAuthentication } from "../utils/checkAuthentication.js";

// Add savings
export const addSaving = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    if (!checkAuthentication(req.userId, res)) return;
    const saving = await createSaving(req.body, req.userId);
    res.status(StatusCodes.CREATED).json(saving);
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(StatusCodes.BAD_REQUEST).json({ message: error.flatten() });
      return;
    }
    sendError(
      res,
      StatusCodes.INTERNAL_SERVER_ERROR,
      "Internal Server error",
      error,
    );
  }
};

// Get Goal Savings
export const getGoalSaving = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    if (!checkAuthentication(req.userId, res)) return;

    const getGoal = await getSavingProgress(req.userId);
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
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const { id } = req.params;

    if (!checkAuthentication(req.userId, res)) return;

    if (!id || Array.isArray(id)) {
      sendError(res, StatusCodes.BAD_REQUEST, "Invalid saving ID");
      return;
    }
    const savingDelete = await DeleteSaving(id, req.userId);
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

// Each Goals
export const goals = async (req: AuthRequest, res: Response) => {
  try {
    if (!checkAuthentication(req.userId, res)) return;

    const goals = await getGoals(req.userId);
    res.status(StatusCodes.OK).json(goals);
  } catch (error) {
    if (error instanceof NotFoundError)
      return res.status(StatusCodes.NOT_FOUND).json({ message: error.message });
    sendError(
      res,
      StatusCodes.INTERNAL_SERVER_ERROR,
      "Internal Server error",
      error,
    );
  }
};

// Update amount
export const addMoneyToGoal = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const { amount } = req.body;

    if (!id || Array.isArray(id)) {
      return sendError(res, StatusCodes.BAD_REQUEST, "Valid ID is required");
    }

    if (typeof amount !== "number" || isNaN(amount)) {
      return sendError(res, StatusCodes.BAD_REQUEST, "Valid ID is required");
    }
    if (!checkAuthentication(req.userId, res)) return;
    const addamount = await getAmount(id, amount, req.userId);

    if (!addamount) {
      return sendError(res, StatusCodes.BAD_REQUEST, "Valid ID is required");
    }

    res.status(200).json(addamount);
  } catch (error) {
    sendError(
      res,
      StatusCodes.INTERNAL_SERVER_ERROR,
      "Internal Server error",
      error,
    );
  }
};
