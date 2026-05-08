import {
  ArrowDownCircle,
  ArrowUpCircle,
  ArrowUpDown,
  Moon,
  Sun,
  Wallet,
} from "lucide-react";
import { useEffect, useState, type FC, type ReactElement } from "react";
import { useTransaction } from "../hook/userTransaction.hook";

export const Summary: FC = (): ReactElement => {
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [mode, setMode] = useState(isDark);
  useEffect(() => {
    if (mode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  const { transactionSummaryQuery } = useTransaction();
  const summary = transactionSummaryQuery;

  if (summary.isLoading) {
    return (
      <div className="flex justify-center p-10">
        <span className="animate-pulse text-gray-400 font-medium">
          Loading summary...
        </span>
      </div>
    );
  }

  if (summary.isError) {
    return (
      <div role="alert" className="p-4 bg-red-50 rounded-lg">
        <span className="text-red-500 font-bold">
          Error: {summary.error.message}
        </span>
      </div>
    );
  }

  const data = summary.data;

  return (
    <section className="">
      <div className="flex justify-end">
        {/* Dark and light modes  */}
        <div className="p-5" onClick={() => setMode(!mode)}>
          {mode ? <Sun size={30} /> : <Moon size={30} />}
        </div>
      </div>

      <div className="flex justify-between max-lg:flex-col-reverse">
        {/* Total Balance Card */}
        <article className=" w-70 p-6 rounded-2xl shadow-sm border border-gray-100 max-lg:w-77 max-lg:mx-auto">
          <header className="flex items-center gap-2 mb-3">
            <Wallet size={20} className="text-blue-600" />
            <h3 className="text-gray-500 dark:text-white text-sm font-medium uppercase">
              Total Balance
            </h3>
          </header>
          <p className="text-3xl font-bold text-blue-800">
            {data?.balance.toLocaleString() || 0}{" "}
            <span className="text-lg font-medium">Birr</span>
          </p>
        </article>

        {/* Total Expense Card */}
        <article className="w-70 p-6 rounded-2xl shadow-sm border border-gray-100 max-lg:w-77 max-lg:mx-auto">
          <header className="flex items-center gap-2 mb-3">
            <ArrowDownCircle size={20} className="text-red-500" />
            <h3 className="text-gray-500 dark:text-white text-sm font-medium uppercase">
              Total Expense
            </h3>
          </header>
          <p className="text-3xl font-bold text-red-500">
            {data?.totalExpense.toLocaleString() || 0}{" "}
            <span className="text-lg font-medium">Birr</span>
          </p>
        </article>

        {/* Total Income Card */}
        <article className="w-70 p-6 rounded-2xl shadow-sm border border-gray-100 max-lg:w-77  max-lg:mx-auto">
          <header className="flex items-center gap-2 mb-3">
            <ArrowUpCircle size={20} className="text-green-700" />
            <h3 className="text-gray-500 dark:text-white text-sm font-medium uppercase ">
              Total Income
            </h3>
          </header>
          <p className="text-3xl font-bold text-green-700">
            {data?.totalIncome.toLocaleString() || 0}{" "}
            <span className="text-lg font-medium">Birr</span>
          </p>
        </article>

        {/* Total Transactions Card */}
        <article className="p-6 rounded-2xl shadow-sm border border-gray-100 max-lg:w-77  max-lg:mx-auto">
          <header className="flex items-center gap-2 mb-3">
            <ArrowUpDown size={20} className="text-gray-400" />
            <h3 className="text-gray-500 dark:text-white text-sm font-medium uppercase ">
              Transactions
            </h3>
          </header>
          <p className="text-3xl font-bold text-center text-gray-800 dark:text-white">
            {data?.transactionCount || 0}
          </p>
        </article>
      </div>
    </section>
  );
};
