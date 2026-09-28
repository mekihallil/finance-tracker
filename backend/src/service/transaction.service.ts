import { Transaction } from "../models/transaction.models.js";
import type {
  TransactionInput,
  ITransaction,
} from "../validations/transaction.validation.js";

interface DateRange {
  start: Date;
  end: Date;
}

const getThisMonthRange = (): DateRange => {
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), 1);
  const end = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return { start, end };
};

const getLastMonthRange = (): DateRange => {
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  const end = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
  return { start, end };
};

const sumAmount = (items: ITransaction[]) =>
  items.reduce((sum, item) => sum + item.amount, 0);

export const GetTransaction = async () => {
  const transaction: ITransaction[] = await Transaction.find();

  // item of income and expense
  const incomeItems = transaction.filter((t) => t.type === "income");
  const expenseItems = transaction.filter((t) => t.type === "expense");

  const totalIncome = sumAmount(incomeItems);
  const totalExpense = sumAmount(expenseItems);

  const balance = totalIncome - totalExpense;

  const totalExpenseTransaction = expenseItems.length;

  const thisMonth = getThisMonthRange();
  const lastMonth = getLastMonthRange();

  // last and current month expense
  const monthExpenses = expenseItems.filter(
    (item) =>
      item.createdAt >= thisMonth.start && item.createdAt < thisMonth.end,
  );
  const lastMonthExpenses = expenseItems.filter(
    (item) =>
      item.createdAt >= lastMonth.start && item.createdAt < lastMonth.end,
  );
  const totalMonthExpense = sumAmount(monthExpenses);
  const totalLastMonthExpense = sumAmount(lastMonthExpenses);

   const diffrenceFromLastMonth = totalMonthExpense - totalLastMonthExpense;

  const percentageFromLastMonth =
    totalLastMonthExpense > 0
      ? (Math.abs(diffrenceFromLastMonth) / totalLastMonthExpense) * 100
      : 0;


  // last and current month income
  const monthIncome = incomeItems.filter(
    (item) =>
      item.createdAt >= thisMonth.start && item.createdAt < thisMonth.end,
  );
  const lastMonthIncome = incomeItems.filter(
    (item) =>
      item.createdAt >= lastMonth.start && item.createdAt < lastMonth.end,
  );
  const totalMonthIncome = sumAmount(monthIncome);
  const totalLastMonthIncome = sumAmount(lastMonthIncome);

  const monthlyBudget = totalMonthIncome;

  // monthly remaining budget balance
  const monthlyRemainingBudget = totalMonthIncome - totalMonthExpense;

  const budgetDifferenceFromLastMonth = totalMonthIncome - totalLastMonthIncome;

  // percentage diffrence for income last month 
  const budgetPercentageFromLastMonth =
    totalLastMonthIncome > 0
      ? (Math.abs(budgetDifferenceFromLastMonth) / totalLastMonthIncome) * 100
      : 0;
  const daysElapsed = new Date().getDate();
  const perDayAvarage =
    totalMonthExpense > 0
      ? Number((totalMonthExpense / daysElapsed).toFixed(2))
      : 0;

  return {
    transaction,
    totalIncome,
    totalExpense,
    balance,
    totalExpenseTransaction,
    totalMonthExpense,
    diffrenceFromLastMonth,
    percentageFromLastMonth,
    monthlyBudget,
    monthlyRemainingBudget,
    budgetDifferenceFromLastMonth,
    budgetPercentageFromLastMonth,
    perDayAvarage,
  };
};

export const CreateTransaction = async (expense: TransactionInput) => {
  const newExpense = await new Transaction(expense).save();
  return newExpense;
};
export const DeleteTransaction = async (id: any) => {
  const deleteExpense = await Transaction.findByIdAndDelete(id);
  return deleteExpense;
};
