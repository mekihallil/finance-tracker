import { CreateTransaction } from "../components/CreateTransaction";
import { GetTransactions } from "../components/GetTransaction";
import { Summary } from "../components/Summary";

export const Dashboard = () => {
  return (
    <>
      <div className="mx-50">
        <Summary />
        <div className="flex">
          <CreateTransaction />
          <GetTransactions />
        </div>
      </div>
    </>
  );
};
