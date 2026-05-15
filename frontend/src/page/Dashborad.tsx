import { FinancialDashbord } from "@/components/FinancialDashboard";
import { TotalInfo } from "@/components/TotalInfo";
import { CreateTransaction } from "../components/CreateTransaction";
import { GetTransactions } from "../components/GetTransaction";
import { NavBar } from "../components/NavBar";
import { Summary } from "../components/Summary";
import { QuickAction } from "@/components/QuickActionsCard";

export const Dashboard = () => {
  return (
    <>
      <section>
        <NavBar />
        <div className="ml-80 max-lg:mx-1">
          <FinancialDashbord />
          <TotalInfo />
          <QuickAction/>
          <Summary />
          <div className="flex gap-5 max-lg:flex-col">
            <CreateTransaction />
            <GetTransactions />
          </div>
        </div>
      </section>
    </>
  );
};
