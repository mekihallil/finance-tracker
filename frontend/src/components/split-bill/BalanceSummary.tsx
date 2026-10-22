import { useSplit } from "@/hook/userSplit.hook";
import { Calculator, DollarSign } from "lucide-react";
import type { FC, ReactElement } from "react";

type Utils = {
  name: string;
  icon: ReactElement;
  amount: number;
};

export const BalanceSummary: FC = (): ReactElement | null => {
  const { getSplitQuery } = useSplit();
  const { data } = getSplitQuery;

  if (!data) return null;
  const { YouOwe, OwedToYou, NetBalance } = data;

  const utils: Utils[] = [
    {
      name: "You Owe",
      icon: <DollarSign />,
      amount: YouOwe,
    },
    {
      name: "Owed to You",
      icon: <DollarSign />,
      amount: OwedToYou,
    },
    {
      name: "Net Balance",
      icon: <Calculator />,
      amount: NetBalance,
    },
  ];
  return (
    <main className="grid gap-5 md:grid-cols-3 ">
      {utils.map(({ name, icon, amount }) => {
        return (
          <section
            key={name}
            className="flex gap-3.5 rounded-3xl dark:bg-[#2C3546] shadow-2xl p-5.5"
          >
            <section className="my-auto">{icon}</section>
            <section>
              <h1>{name}</h1>
              <h1
                className={`text-2xl font-semibold ${NetBalance < 0 && name === "Net Balance" ? "text-red-600" : " "}  ${OwedToYou < YouOwe && name === "You Owe" ? "text-red-600" : ""}`}
              >
                {amount.toLocaleString("en-us", {
                  style: "currency",
                  currency: "USD",
                })}
              </h1>
            </section>
          </section>
        );
      })}
    </main>
  );
};
