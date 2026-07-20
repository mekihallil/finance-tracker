import { AccountSummary } from "@/components/dashboard/AccountSummary";
import { FinancialDashbaord } from "@/components/dashboard/FinancialDashboard";
import { QuickActions } from "@/components/dashboard/QuickActionsCard";
import { RecentExpenses } from "@/components/dashboard/RecentExpenses";
import type { FC, ReactElement } from "react";

export const Dashboard: FC = (): ReactElement => {
  return (
    <main>
      <div className="ml-80 mr-10">
        <FinancialDashbaord />
        <AccountSummary />
        <QuickActions />
        <RecentExpenses />
      </div>
    </main>
  );
};
