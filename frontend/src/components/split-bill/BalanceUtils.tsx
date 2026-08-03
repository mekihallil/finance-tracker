import { Calculator, DollarSign } from "lucide-react";
import type { FC, ReactElement } from "react";

type Utils = {
  name: string;
  icon: ReactElement;
  amount: number;
};

const utils: Utils[] = [
  {
    name: "You Owe",
    icon: <DollarSign />,
    amount: 3.24,
  },
  {
    name: "Owed to You",
    icon: <DollarSign />,
    amount: 60.25,
  },
  {
    name: "Net Balance",
    icon: <Calculator />,
    amount: 60.25,
  },
];

export const BalanceUtils: FC = (): ReactElement => {
  return (
    <main className="grid grid-cols-3 gap-6.25">
      {utils.map(({ name, icon, amount }) => {
        return (
          <section className="flex gap-3.5 rounded-3xl bg-[#2C3546] p-5.5">
            <section className="my-auto">{icon}</section>
            <section>
              <h1>{name}</h1>
              <h1 className="text-2xl font-semibold">${amount}</h1>
            </section>
          </section>
        );
      })}
    </main>
  );
};
