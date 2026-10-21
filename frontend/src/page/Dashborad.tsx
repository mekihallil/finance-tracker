import { AccountSummary } from "@/components/dashboard/AccountSummary";
import { FinancialDashbaord } from "@/components/dashboard/FinancialDashboard";
import { QuickActions } from "@/components/dashboard/QuickActionsCard";
import { RecentTransaction } from "@/components/dashboard/RecentTransaction";
import type { FC, ReactElement } from "react";

export const Dashboard: FC = (): ReactElement => {
  return (
    <main>
      <div className="lg:ml-80 lg:mr-10 px-6">
        <FinancialDashbaord />
        <div className="md:flex justify-center ">
          <AccountSummary />
        </div>
        <QuickActions />
        <RecentTransaction />
      </div>
    </main>
  );
};
