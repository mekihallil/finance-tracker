import { FinancialDashbord } from "@/components/FinancialDashboard";
import { GetExpenses } from "@/components/GetExpense";
import { QuickAction } from "@/components/QuickActionsCard";
import { TotalInfo } from "@/components/TotalInfo";
import type { FC, ReactElement } from "react";
import { NavBar } from "../page/NavBar";

export const Dashboard: FC = (): ReactElement => {
  return (
    <>
      <section>
        <NavBar />
        <div className="ml-80 max-lg:mx-1">
          <FinancialDashbord />
          <TotalInfo />
          <QuickAction />
          <GetExpenses />
        </div>
      </section>
    </>
  );
};
