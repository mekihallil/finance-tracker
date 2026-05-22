import { FinancialDashbord } from "@/components/FinancialDashboard";
import { GetExpenses } from "@/components/GetExpense";
import { QuickAction } from "@/components/QuickActionsCard";
import { TotalInfo } from "@/components/TotalInfo";
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
