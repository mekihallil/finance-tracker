import { AddExpense } from "@/components/expenseIncome/AddExpense";
import { ExpenseTitle } from "@/components/expenseIncome/ExpenseTitle";
import { MonthlyExpenseSummary } from "@/components/expenseIncome/MonthlyExpenseSummary";
import { RecentExpenses } from "@/components/expenseIncome/RecentExpenses";
import type { FC, ReactElement } from "react";

export const Expense: FC = (): ReactElement => {
  return (
    <main>
      <div className="ml-80 mr-10">
        <ExpenseTitle />
        <AddExpense />
        <MonthlyExpenseSummary />
        <RecentExpenses />
      </div>
    </main>
  );
};
