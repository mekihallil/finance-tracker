import { FinancialDashbord } from "@/components/FinancialDashboard";
import { CreateTransaction } from "../components/CreateTransaction";
import { GetTransactions } from "../components/GetTransaction";
import { NavBar } from "../components/NavBar";
import { Summary } from "../components/Summary";

export const Dashboard = () => {
  return (
    <>
      <section>
        <NavBar />
        <div className="ml-80 max-lg:mx-1">
          <FinancialDashbord />
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
