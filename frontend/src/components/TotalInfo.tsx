import { TrendingDown, TrendingUp, Wallet } from "lucide-react";
import type { FC, ReactElement } from "react";

interface StatCard {
  id: string;
  label: string;
  value: string;
  percentageChange: number;
  subLabel: string;
}


const STAT_CARDS: StatCard[] = [
  {
    id: "total-spent",
    label: "Total Spent",
    value: "$1,250.75",
    percentageChange: -12,
    subLabel: "from last month",
  },
  {
    id: "monthly-budget",
    label: "Monthly Budget",
    value: "$3,000.00",
    percentageChange: 5,
    subLabel: "remaining this month",
  },
  {
    id: "saving-progress",
    label: "Saving Progress",
    value: "$540.00",
    percentageChange: -8,
    subLabel: "toward your goal",
  },
  {
    id: "group-expense",
    label: "Group Expense",
    value: "$320.50",
    percentageChange: 3,
    subLabel: "shared this month",
  },
];

interface StatCardItemProps {
  card: StatCard;
}

const StatCardItem: FC<StatCardItemProps> = ({ card }): ReactElement => {
  const isNegative = card.percentageChange < 0;

  return (
    <article className="flex flex-col justify-between dark:bg-linear-to-tl dark:to-[#30373E] border border-gray-200 rounded-2xl shadow-2xl w-68.75 p-6.25">
      <header className="flex justify-between">
        <Wallet size={20} className="mx-4 my-5" />
        <div className="flex items-start ">
          <div className="flex gap-1 items-center rounded-2xl text-xl py-1 px-2 bg-red-500/10 text-red-500">
            {isNegative ? (
              <TrendingDown size={13} className="ml-0.5" />
            ) : (
              <TrendingUp size={13} className="ml-0.5" />
            )}
            <p className="text-[12px] font-semibold">
              {Math.abs(card.percentageChange)}%
            </p>
          </div>
        </div>
      </header>

      <section>
        <div className="text-[#94A3B8] font-semibold">{card.label}</div>
        <div className="text-[#2CC66D] font-bold text-[28px]">{card.value}</div>
        <div className="text-[#94A3B8] text-[12px]">{card.subLabel}</div>
      </section>
    </article>
  );
};

export const TotalInfo: FC = (): ReactElement => {
  return (
    <section className="flex gap-8 mb-8.75">
      {STAT_CARDS.map((card) => (
        <StatCardItem key={card.id} card={card} />
      ))}
    </section>
  );
};
