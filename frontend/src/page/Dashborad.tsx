import { AccountSummary } from "@/components/dashboard/AccountSummary";
import { FinancialDashbaord } from "@/components/dashboard/FinancialDashboard";
import { QuickActions } from "@/components/dashboard/QuickActionsCard";
import { RecentExpenseIncome } from "@/components/dashboard/RecentExpenseIncome";
import type { FC, ReactElement } from "react";

export const Dashboard: FC = (): ReactElement => {
  return (
    <main>
      <div className="ml-80 mr-10">
        <FinancialDashbaord />
        <div className="flex justify-center">
          <AccountSummary />
        </div>
        <QuickActions />
        <RecentExpenseIncome />
      </div>
    </main>
  );
};
