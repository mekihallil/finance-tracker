import type { Request, Response } from "express";
import type { IExpense } from "../validations/expense.validation.js";
import { Expense } from "../models/expense.models.js";

// get expenses
export const getExpense = async (req: Request, res: Response) => {
  try {
    const expenses: IExpense[] = await Expense.find();

    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: "Expense not found", error });
  }
};
// Summery expenses
export const getSummary = async (req: Request, res: Response) => {
  const expenses = await Expense.find();
  // Total income
  const totalIncome = expenses
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);
  // Total expense
  const totalExpense = expenses
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpense;

  res.status(200).json({
    totalIncome,
    totalExpense,
    balance,
    expenseCount: expenses.length,
  });
};

// Create expenses
export const createExpense = async (
  req: Request<{}, {}, IExpense>,
  res: Response,
) => {
  try {
    const { title, amount, type, category } = req.body;
    const newExpense = await new Expense({
      title,
      amount,
      type,
      category,
    }).save();
    res.status(201).json(newExpense);
  } catch (error) {
    res.status(500).json({ message: "Can not add new expense" });
  }
};

// Delete Expense
export const deleteExpense = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const deletExpense = await Expense.findByIdAndDelete(_id);
    if (!deletExpense) {
      res.status(400).json({ message: "Expense not found" });
    }
    res.status(200).json({ message: "Expense deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Failed to delete Expense" });
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
