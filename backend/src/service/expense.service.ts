import { Expense } from "../models/expense.models.js";
import type { IExpense } from "../validations/expense.validation.js";

export const GetExpense = async () => {
  const expenses: IExpense[] = await Expense.find();
  return expenses;
};

export const GetSummary = async () => {
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

  return {
    totalIncome,
    totalExpense,
    balance,
    expenseCount: expenses.length,
  };
};

export const CreateExpense = async (expense: IExpense) => {
  const newExpense = await new Expense(expense).save();
  return newExpense;
};
export const DeleteExpense = async (id: any) => {
  const deleteExpense = await Expense.findByIdAndDelete(id);
  return deleteExpense;
};

export const GetMonthlyExpense = async () => {
  // Daily Date Range
  const startDay = new Date();
  startDay.setHours(0, 0, 0, 0);
  const endDay = new Date();
  endDay.setHours(23, 59, 59, 999);

  const todayExpenses = await Expense.find({
    createdAt: {
      $gte: startDay,
      $lte: endDay,
    },
  });
  const totalDayExpense = todayExpenses.reduce(
    (acc, item) => acc + item.amount,
    0,
  );

  const perDayAvarage =
    totalDayExpense > 0
      ? Number((totalDayExpense / todayExpenses.length).toFixed(2))
      : 0;

  // Monthly Date Range
  const startMonth = new Date();
  startMonth.setDate(1);
  startMonth.setHours(0, 0, 0, 0);

  const endMonth = new Date();
  endMonth.setMonth(endMonth.getMonth() + 1);
  endMonth.setHours(0, 0, 0, 0);
  endMonth.setDate(1);
  const monthExpenses = await Expense.find({
    createdAt: {
      $gte: startMonth,
      $lt: endMonth,
    },
  });

  const totalMonthExpense = monthExpenses.reduce(
    (acc, item) => acc + item.amount,
    0,
  );

  return {
    totalMonthExpense,
    perDayAvarage,
    totalExpenseTransaction: monthExpenses.length,
  };
};
