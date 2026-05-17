import { FinancialDashbord } from "@/components/FinancialDashboard";
import { QuickAction } from "@/components/QuickActionsCard";
import { TotalInfo } from "@/components/TotalInfo";
import { GetTransactions } from "../components/GetTransaction";
import { NavBar } from "../components/NavBar";

export const Dashboard = () => {
  return (
    <>
      <section>
        <NavBar />
        <div className="ml-80 max-lg:mx-1">
          <FinancialDashbord />
          <TotalInfo />
          <QuickAction />
          {/* <div className="flex gap-5 max-lg:flex-col"> */}
          {/* <CreateTransaction /> */}
          <GetTransactions />
          {/* </div> */}
          {/* <Summary /> */}
        </div>
      </section>
    </>
  );
};
