import type { FC, ReactElement } from "react";

export const ExpenseTitle: FC = (): ReactElement => {
  return (
    <>
      <article>
        <div className="p-6">
          <p className="text-[26px] font-semibold">Expense Tracker</p>
          <p className="text-[18px] text-[#64748B]">
            Track your daily expenses and spending patterns
          </p>
        </div>
      </article>
    </>
  );
};
