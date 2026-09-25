import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import {
  CreateExpense,
  DeleteExpense,
  GetExpenseIncome,
} from "../service/expenseIncome.service.js";
import type { IExpenseIncome } from "../validations/expenseIncome.validation.js";
import { sendError } from "../error/error.js";

// get expenses
export const getExpenseIncome = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const expenseAndIncome = await GetExpenseIncome();
    res.status(StatusCodes.OK).json(expenseAndIncome);
  } catch (error) {
    sendError(
      res,
      StatusCodes.INTERNAL_SERVER_ERROR,
      "Expense And/or Income not found",
      error,
    );
  }
};

// Create expenses
export const createExpense = async (
  req: Request<Record<string, never>, unknown, IExpenseIncome>,
  res: Response,
) => {
  try {
    const { title, amount, type, category } = req.body;
    const newExpense = await CreateExpense({ title, amount, type, category });
    res.status(StatusCodes.CREATED).json(newExpense);
  } catch (error) {
    sendError(
      res,
      StatusCodes.INTERNAL_SERVER_ERROR,
      "Can not add new expense",
      error,
    );
  }
};

// Delete Expense
export const deleteExpense = async (
  req: Request<{ _id: string }>,
  res: Response,
) => {
  try {
    const { _id } = req.params;
    const deletExpense = await DeleteExpense(_id);
    if (!deletExpense) {
      sendError(res, StatusCodes.BAD_REQUEST, "Expense not found");
      return;
    }
    res
      .status(StatusCodes.OK)
      .json({ message: "Expense deleted successfully" });
  } catch (error) {
    sendError(res, StatusCodes.BAD_REQUEST, "Failed to delete Expense", error);
  }
};
