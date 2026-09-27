// import { TransactionService } from "@/services/Transaction.service";
import { useTransactionIncome } from "@/hook/userNewTransaction.hook";
import { Calendar, DollarSign, Tag } from "lucide-react";
import type { FC, ReactElement } from "react";
import { toast } from "sonner";

type MonthData = {
  id: number;
  title: string;
  amount: number;
  icon: ReactElement;
  color: string;
};

export const MonthlyTransaction: FC = (): ReactElement => {
  const { getTransactionIncomeQuery } = useTransactionIncome();
  const Transaction = getTransactionIncomeQuery;
  const data = Transaction.data;

  if (Transaction.isLoading) {
    return (
      <div className="flex justify-center p-10">
        <span className="animate-pulse text-gray-400 font-medium">
          Loading summary...
        </span>
      </div>
    );
  }
  if (Transaction.isError) {
    return (
      <div role="alert" className="p-4 bg-red-50 rounded-lg">
        <span className="text-red-500 font-bold">
          Error: {Transaction.error.message}
          {toast.error(Transaction.error.message)}
        </span>
      </div>
    );
  }
  if (!data) {
    console.log("No Transactions this month");
  }
  const monthData: MonthData[] = [
    {
      id: 1,
      title: "This Month",
      amount: data?.totalMonthTransaction || 0.0,
      icon: <Calendar size={20} />,
      color: "text-blue-600",
    },
    {
      id: 2,
      title: "Transctions",
      amount: data?.totalTransactionTransaction || 0,
      icon: <Tag size={30} />,
      color: "text-green-600",
    },
    {
      id: 3,
      title: "Average Per Day",
      amount: data?.perDayAvarage || 0.0,
      icon: <DollarSign size={20} />,
      color: "text-red-600",
    },
  ];
  return (
    <section className="mt-8">
      <div className="grid grid-cols-3 gap-8 ">
        {monthData.map(({ id, icon, title, amount }) => {
          return (
            <article
              key={id}
              className="flex items-center shadow-2xl rounded-2xl dark:bg-[#2C3546] p-6 "
            >
              <div className="pr-3">{icon}</div>
              <div>
                <p className=" text-[#64748B] font-medium">{title}</p>
                <h1 className="text-2xl font-bold">
                  {id === 2
                    ? amount.toLocaleString()
                    : "$" + amount.toLocaleString()}
                </h1>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
