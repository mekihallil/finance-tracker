import { ExpenseIncome } from "../models/expenseIncome.models.js";
import type {
  ExpenseIncomeInput,
  IExpenseIncome,
} from "../validations/expenseIncome.validation.js";

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

const sumAmount = (items: IExpenseIncome[]) =>
  items.reduce((sum, item) => sum + item.amount, 0);

export const GetExpenseIncome = async () => {
  const expenseIncome: IExpenseIncome[] = await ExpenseIncome.find();

  // item of income and expense
  const incomeItems = expenseIncome.filter((t) => t.type === "income");
  const expenseItems = expenseIncome.filter((t) => t.type === "expense");

  const totalIncome = sumAmount(incomeItems);
  const totalExpense = sumAmount(expenseItems);

  const totalExpenseTransaction = expenseItems.length;

  const balance = totalIncome - totalExpense;

  const thisMonth = getThisMonthRange();
  const lastMonth = getLastMonthRange();

  const monthExpenses = expenseItems.filter((item) => 
    item.createdAt >= thisMonth.start && item.createdAt < thisMonth.end,
  );
  const lastMonthExpenses = expenseItems.filter((item) => 
    item.createdAt >= lastMonth.start && item.createdAt < lastMonth.end,
  );
  const totalMonthExpense = sumAmount(monthExpenses);
  const totalLastMonthExpense = sumAmount(lastMonthExpenses);

  const daysElapsed = new Date().getDate();
  const perDayAvarage =
    totalMonthExpense > 0
      ? Number((totalMonthExpense / daysElapsed).toFixed(2))
      : 0;

  return {
    expenseIncome,
    totalIncome,
    totalExpense,
    balance,
    totalExpenseTransaction,
    totalMonthExpense,
    totalLastMonthExpense,
    perDayAvarage,
  };
};

export const CreateExpense = async (expense: ExpenseIncomeInput) => {
  const newExpense = await new ExpenseIncome(expense).save();
  return newExpense;
};
export const DeleteExpense = async (id: any) => {
  const deleteExpense = await ExpenseIncome.findByIdAndDelete(id);
  return deleteExpense;
};
