import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { getAmount, getGoals } from "../service/goal.service.js";
import { NotFoundError } from "../error/error.js";

// Each Goals
export const goals = async (req: Request, res: Response) => {
  try {
    const goals = await getGoals();
    res.status(StatusCodes.OK).json(goals);
  } catch (error) {
    if (error instanceof NotFoundError)
      return res.status(StatusCodes.NOT_FOUND).json({ message: error.message });
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal Server error" });
  }
};

// Update amount
export const addMoneyToGoal = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { amount } = req.body;

    if (!id || Array.isArray(id)) {
      return res.status(400).json({ message: "Valid ID is required" });
    }

    if (typeof amount !== "number" || isNaN(amount)) {
      return res.status(400).json({ message: "Valid amount is required" });
    }

    const addamount = await getAmount(id, amount);

    if (!addamount) {
      return res.status(404).json({ message: "Goal not found" });
    }

    res.status(200).json(addamount);
  } catch (error) {
    res.status(500).json({ message: "Failed to add money", error });
  }
};
