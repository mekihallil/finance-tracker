import { AddExpense } from "@/components/AddExpense";
import { ExpenseTitle } from "@/components/ExpenseTitle";
import { RecentExpense } from "@/components/RecentExpense";
import { ThisMonth } from "@/components/ThisMonth";
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
