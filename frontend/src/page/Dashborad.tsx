import { CreateTransaction } from "../components/CreateTransaction";
import { GetTransactions } from "../components/GetTransaction";
import { NavBar } from "../components/NavBar";
import { Summary } from "../components/Summary";

export const Dashboard = () => {
  return (
    <>
      <section className="flex">
        <nav className="w-1/6 ">
          <NavBar />
        </nav>
        <div className="w-4.5/6 mx-auto max-lg:mx-1">
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
