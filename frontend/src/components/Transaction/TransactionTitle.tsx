import type { FC, ReactElement } from "react";

export const TransactionTitle: FC = (): ReactElement => {
  return (
    <>
      <article>
        <div className="py-6">
          <p className="text-[26px] font-semibold">Transaction Tracker</p>
          <p className="text-[18px] text-[#64748B]">
            Track your daily Transactions and spending patterns
          </p>
        </div>
      </article>
    </>
  );
};
