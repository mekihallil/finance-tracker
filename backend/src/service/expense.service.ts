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
export const DeleteExpense = async (id:any) => {
  const deleteExpense = await Expense.findByIdAndDelete(id);
  return deleteExpense;
};
