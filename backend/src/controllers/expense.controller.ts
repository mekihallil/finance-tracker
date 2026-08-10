import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { Expense } from "../models/expense.models.js";
import {
  CreateExpense,
  DeleteExpense,
  GetExpense,
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
    // Daily Date Range
    const startDay = new Date();
    startDay.setHours(0, 0, 0, 0);
    const endDay = new Date();
    endDay.setHours(23, 59, 59, 999);

    const todayExpenses = await Expense.find({
      createAt: {
        $gte: startDay,
        $lte: endDay,
      },
    });
    const totalDayExpense = todayExpenses.reduce(
      (acc, item) => acc + item.amount,
      0,
    );

    const perDayAvarage =
      totalDayExpense > 0 &&
      Number((totalDayExpense / todayExpenses.length).toFixed(2));

    // Monthly Date Range

    const startMonth = new Date();
    startMonth.setDate(1);
    startMonth.setHours(0, 0, 0, 0);

    const endMonth = new Date();
    endMonth.setMonth(endMonth.getMonth() + 1);
    endMonth.setHours(0, 0, 0, 0);
    endMonth.setDate(1);
    const monthExpenses = await Expense.find({
      createAt: {
        $gte: startMonth,
        $lt: endMonth,
      },
    });

    const totalMonthExpense = monthExpenses.reduce(
      (acc, item) => acc + item.amount,
      0,
    );

    res.status(200).json({
      totalMonthExpense,
      perDayAvarage,
      totalExpenseTransaction: monthExpenses.length,
    });
  } catch (error) {
    res.status(400).json({ message: "Failed to delete Expense" });
  }
};
