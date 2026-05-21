import { AddExpense } from "@/components/AddExpense";
import { ExpenseTitle } from "@/components/ExpenseTitle";
import { ThisMonth } from "@/components/ThisMonth";
import { NavBar } from "@/page/NavBar";
import type { FC, ReactElement } from "react";

export const Expense: FC = (): ReactElement => {
  return (
    <>
      <section>
        <NavBar />
        <section className="ml-80">
          <ExpenseTitle />
          <AddExpense />
          <ThisMonth />
        </section>
      </section>
    </>
  );
};
