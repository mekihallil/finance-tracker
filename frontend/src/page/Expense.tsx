import { AddExpense } from "@/components/expense/AddExpense";
import { ExpenseTitle } from "@/components/expense/ExpenseTitle";
import { RecentExpense } from "@/components/expense/RecentExpense";
import { ThisMonth } from "@/components/expense/ThisMonth";
import type { FC, ReactElement } from "react";

export const Expense: FC = (): ReactElement => {
  return (
    <>
      <section>
        <div className="ml-80 mr-10">
          <ExpenseTitle />
          <AddExpense />
          <ThisMonth />
          <RecentExpense />
        </div>
      </section>
    </>
  );
};
