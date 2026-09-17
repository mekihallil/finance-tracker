import { useSaving } from "@/hook/userSaving.hook";
import { TrendingDown, TrendingUp, Wallet } from "lucide-react";
import { type FC, type ReactElement } from "react";

interface GoalData {
  _id: string;
  title: string;
  percentage: number;
  amount: number; // assuming this exists for displaying $ value
}

interface StatCard {
  id: string;
  label: string;
  value: string;
  percentageChange: number;
  subLabel: string;
}

interface StatCardItemProps {
  card: StatCard;
}

const StatCardItem: FC<StatCardItemProps> = ({ card }): ReactElement => {
  const isNegative = card.percentageChange < 0;

  return (
    <article className="flex flex-col justify-between dark:bg-linear-to-tl dark:to-[#30373E] border border-gray-200 rounded-2xl shadow-2xl w-68.75 p-6.25">
      <header className="flex justify-between">
        <Wallet size={20} className="mx-4 my-5" />
        <div className="flex items-start">
          <div className="flex gap-1 items-center rounded-2xl text-xl py-1 px-2 ">
            {isNegative ? (
              <TrendingDown
                size={13}
                className="ml-0.5 bg-red-500/10 text-red-500"
              />
            ) : (
              <TrendingUp
                size={13}
                className="ml-0.5 bg-green-500/10 text-green-500"
              />
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

export const AccountSummary: FC = (): ReactElement => {
  const { goalsQuery } = useSaving();
  const { data, isLoading, isError, error } = goalsQuery;

  const topGoal =
    data && data.length > 0
      ? data.reduce((highest: GoalData, goal: GoalData) =>
          goal.percentage > highest.percentage ? goal : highest,
        )
      : null;

  const statCards: StatCard[] = [
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
      value: topGoal ? `$${topGoal.amount.toFixed(2)}` : "$0.00",
      percentageChange: topGoal ? topGoal.percentage : 0,
      subLabel: topGoal ? `${topGoal.percentage}% of goal` : "No goals yet",
    },
    {
      id: "group-expense",
      label: "Group Expense",
      value: "$320.50",
      percentageChange: 3,
      subLabel: "shared this month",
    },
  ];

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <section className="grid grid-cols-4 gap-8 mb-8.75">
      {statCards.map((card) => (
        <StatCardItem key={card.id} card={card} />
      ))}
    </section>
  );
};
