import { ExpenseIncome } from "../models/expenseIncome.models.js";
import type { IExpenseIncome } from "../validations/expenseIncome.validation.js";

export const GetExpenseIncome = async () => {
  const expenseIncome: IExpenseIncome[] = await ExpenseIncome.find();
  // Total income
  const totalIncome = expenseIncome
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  // Total expense
  const totalExpense = expenseIncome
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const countTotalExpense = expenseIncome.filter(
    (t) => t.type === "expense",
  ).length;

  const balance = totalIncome - totalExpense;

  // Daily Date Range
  const startDay = new Date();
  startDay.setHours(0, 0, 0, 0);
  const endDay = new Date();
  endDay.setHours(23, 59, 59, 999);

  const todayExpenses = await ExpenseIncome.find({
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
  const monthExpenses = await ExpenseIncome.find({
    type: "expense",
    createdAt: {
      $gte: startMonth,
      $lt: endMonth,
    },
  });

  const totalMonthExpense = monthExpenses.reduce(
    (acc, item) => acc + item.amount,
    0,
  );

  // last Month Date Range
  const today = new Date();
  const startDate = new Date(today.getFullYear(), today.getMonth() - 1, 1);
  const endDate = new Date(
    today.getFullYear(),
    today.getMonth() - 1,
    today.getDate(),
  );

  const lastMonthExpenses = await ExpenseIncome.find({
    type:"expense",
    createdAt: {
      $gte: startDate,
      $lt: endDate,
    },
  });

  const totalLastMonthExpense = lastMonthExpenses.reduce(
    (acc, item) => acc + item.amount,
    0,
  );

  return {
    expenseIncome,
    totalIncome,
    totalExpense,
    balance,
    totalExpenseTransaction: countTotalExpense,
    totalMonthExpense,
    perDayAvarage,
    totalLastMonthExpense,
  };
};

export const CreateExpense = async (expense: IExpenseIncome) => {
  const newExpense = await new ExpenseIncome(expense).save();
  return newExpense;
};
export const DeleteExpense = async (id: any) => {
  const deleteExpense = await ExpenseIncome.findByIdAndDelete(id);
  return deleteExpense;
};
