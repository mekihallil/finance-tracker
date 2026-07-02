import { FinancialDashbord } from "@/components/dashboard/FinancialDashboard";
import { GetExpenses } from "@/components/dashboard/GetExpense";
import { QuickAction } from "@/components/dashboard/QuickActionsCard";
import { TotalInfo } from "@/components/dashboard/TotalInfo";
import type { FC, ReactElement } from "react";

export const Dashboard: FC = (): ReactElement => {
  return (
    <>
      <section>
        <div className="ml-80 mr-10">
          <FinancialDashbord />
          <TotalInfo />
          <QuickAction />
          <GetExpenses />
        </div>
      </section>
    </>
  );
};
