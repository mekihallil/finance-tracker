import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import {
  CreateExpense,
  DeleteExpense,
  GetExpense,
  GetMonthlyExpense,
  GetSummary,
} from "../service/expense.service.js";
import type { IExpense } from "../validations/expense.validation.js";

// get expenses
export const getExpense = async (req: Request, res: Response) => {
  try {
    const expenses = await GetExpense();
    res.status(StatusCodes.OK).json(expenses);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Expense not found", error });
  }
};
// Summery expenses
export const getSummary = async (req: Request, res: Response) => {
  try {
    const expenses = await GetSummary();
    res.status(StatusCodes.OK).json(expenses);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Expense not found", error });
  }
};

// Create expenses
export const createExpense = async (
  req: Request<{}, {}, IExpense>,
  res: Response,
) => {
  try {
    const { title, amount, type, category } = req.body;
    const newExpense = CreateExpense({ title, amount, type, category });
    res.status(StatusCodes.CREATED).json(newExpense);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Can not add new expense" });
  }
};

// Delete Expense
export const deleteExpense = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const deletExpense = await DeleteExpense(_id);
    if (!deletExpense) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Expense not found" });
    }
    res
      .status(StatusCodes.OK)
      .json({ message: "Expense deleted successfully" });
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Failed to delete Expense" });
  }
};

// monthly Expense
export const getmonthlyExpense = async (req: Request, res: Response) => {
  try {
    const getSummary = GetMonthlyExpense();
    res.status(StatusCodes.OK).json(getSummary);
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Failed to delete Expense", error });
  }
};
