import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { getAmount, getGoals } from "../service/goal.service.js";
import { NotFoundError, sendError } from "../error/error.js";

// Each Goals
export const goals = async (req: Request, res: Response) => {
  try {
    const goals = await getGoals();
    res.status(StatusCodes.OK).json(goals);
  } catch (error) {
    if (error instanceof NotFoundError)
      return res.status(StatusCodes.NOT_FOUND).json({ message: error.message });
    sendError(res,StatusCodes.INTERNAL_SERVER_ERROR,"Internal Server error",error)
  }
};

// Update amount
export const addMoneyToGoal = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { amount } = req.body;

    if (!id || Array.isArray(id)) {
      return sendError(res,StatusCodes.BAD_REQUEST,"Valid ID is required")
    }

    if (typeof amount !== "number" || isNaN(amount)) {
      return sendError(res,StatusCodes.BAD_REQUEST,"Valid ID is required")
    }

    const addamount = await getAmount(id, amount);

    if (!addamount) {
      return sendError(res,StatusCodes.BAD_REQUEST,"Valid ID is required")
    }

    res.status(200).json(addamount);
  } catch (error) {
    sendError(res,StatusCodes.INTERNAL_SERVER_ERROR,"Internal Server error",error)
  }
};
