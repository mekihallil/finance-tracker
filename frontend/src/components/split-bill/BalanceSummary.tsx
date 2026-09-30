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
  const { OwedToYou } = data;
  const utils: Utils[] = [
    {
      name: "You Owe",
      icon: <DollarSign />,
      amount: 3.24,
    },
    {
      name: "Owed to You",
      icon: <DollarSign />,
      amount: OwedToYou,
    },
    {
      name: "Net Balance",
      icon: <Calculator />,
      amount: 60.25,
    },
  ];
  return (
    <main className="grid grid-cols-3 gap-6.25">
      {utils.map(({ name, icon, amount }) => {
        return (
          <section
            key={name}
            className="flex gap-3.5 rounded-3xl dark:bg-[#2C3546] shadow-2xl p-5.5"
          >
            <section className="my-auto">{icon}</section>
            <section>
              <h1>{name}</h1>
              <h1 className="text-2xl font-semibold">
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
