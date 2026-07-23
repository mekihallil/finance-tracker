import { AddExpense } from "@/components/expense/AddExpense";
import { ExpenseTitle } from "@/components/expense/ExpenseTitle";
import { MonthlyExpenseSummary } from "@/components/expense/MonthlyExpenseSummary";
import { RecentExpenses } from "@/components/expense/RecentExpenses";
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
