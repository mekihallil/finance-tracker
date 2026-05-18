import { AddExpense } from "@/components/AddExpense";
import { ExpenseTitle } from "@/components/ExpenseTitle";
import { NavBar } from "@/components/NavBar";
import type { FC, ReactElement } from "react";

export const Expense: FC = (): ReactElement => {
  return (
    <>
      <section>
        <NavBar />
        <section className="ml-80">
          <ExpenseTitle />
          <AddExpense />
        </section>
      </section>
    </>
  );
};
