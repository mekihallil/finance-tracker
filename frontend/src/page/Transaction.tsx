import { NewTransaction } from "@/components/Transaction/AddNewTransaction";
import { TransactionTitle } from "@/components/Transaction/TransactionTitle";
import { MonthlyTransaction } from "@/components/Transaction/MonthlyTransaction";
import { RecentTransactions } from "@/components/Transaction/RecentTransaction";
import type { FC, ReactElement } from "react";

export const Transaction: FC = (): ReactElement => {
  return (
    <main>
      <div className="ml-80 mr-10">
        <TransactionTitle />
        <NewTransaction />
        <MonthlyTransaction />
        <RecentTransactions />
      </div>
    </main>
  );
};
