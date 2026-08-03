import { TrendingUp } from "lucide-react";
import type { FC, ReactElement } from "react";

type Tips = {
  id: number;
  name: string;
  description: string;
};

const tips: Tips[] = [
  {
    id: 1,
    name: "Automate Your Savings",
    description: "Set up automatic transfers to reach your goals faster",
  },
  {
    id: 2,
    name: "50/30/20 Rule",
    description: "Allocate 50% needs, 30% wants, 20% savings",
  },

  {
    id: 3,
    name: "Track Small Wins",
    description: "Celebrate every milestone to stay motivated",
  },

  {
    id: 4,
    name: "Emergency First",
    description: "Build a 3-6 month emergency fund before other goals",
  },
];

export const SmartSavingsTips: FC = (): ReactElement => {
  return (
      <article className="rounded-[20px] dark:bg-[#2C3546] border border-gray-300 dark:border-none p-7 mb-7 mt-7">
        <header className="flex gap-2">
          <TrendingUp />
          <h2 className="font-medium ">Smart Savings Tips</h2>
        </header>
        <section className="grid grid-cols-2 gap-4 justify-center mt-5">
          {tips.map(({id,name,description}) => {
            return (
              <div
                key={id}
                className="grid gap-2 text-[15px] font-semibold border border-gray-600 rounded-2xl p-4"
              >
                <h3>{name}</h3>
                <h6 className="text-sm text-gray-400">{description}</h6>
              </div>
            );
          })}
        </section>
      </article>
  );
};
