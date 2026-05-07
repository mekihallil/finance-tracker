import { CreateTransaction } from "../components/CreateTransaction";
import { GetTransactions } from "../components/GetTransaction";
import { Summary } from "../components/Summary";

export const Dashboard = () => {
  return (
    <>
      <div className="mx-50 max-lg:mx-1 ">
        <Summary />
        <div className="flex gap-5 max-lg:flex-col">
          <CreateTransaction />
          <GetTransactions />
        </div>
      </div>
    </>
  );
};
