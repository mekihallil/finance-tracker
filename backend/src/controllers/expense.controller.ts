import type { Request, Response } from "express";
import type { EInterface } from "../interface/expense.interface.js";
import { Expense } from "../models/expense.models.js";

// get expenses
export const getExpense = async (req: Request, res: Response) => {
  try {
    const expenses: EInterface[] = await Expense.find();

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
  req: Request<{}, {}, EInterface>,
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
export const monthlyExpense = async (req: Request, res: Response) => {
  try {
    const start = new Date(new Date()).setHours(0, 0, 0, 0);
    const end = new Date(new Date()).setHours(23, 59, 59, 999);
    const currentYear = new Date().getFullYear();

    const expenses = await Expense.find({
      createAt: {
        $gte: start,
        $lte: end,
      },
    });
    const totalTodayExpense = expenses.reduce(
      (acc, item) => acc + item.amount,
      0,
    );
    const perDayAvarage =
      totalTodayExpense > 0 &&
      Number((totalTodayExpense / expenses.length).toFixed(2));
    res.status(200).json({
      totalTodayExpense,
      perDayAvarage,
      totalExpenseTransaction: expenses.length,
    });
  } catch (error) {
    console.log(error);
  }
};
