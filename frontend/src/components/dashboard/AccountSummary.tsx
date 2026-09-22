import { useExpense } from "@/hook/userExpense.hook";
import { useSaving } from "@/hook/userSaving.hook";
import { TrendingDown, TrendingUp, Wallet } from "lucide-react";
import { type FC, type ReactElement } from "react";
import { Link } from "react-router";

interface GoalData {
  _id: string;
  title: string;
  percentage: number;
  amount: number; // assuming this exists for displaying $ value
}

interface StatCard {
  id: string;
  link: string;
  label: string;
  value: number;
  percentageChange: number;
  subLabel: string;
}

export const AccountSummary: FC = (): ReactElement => {
  const { goalsQuery } = useSaving();
  const { data, isLoading, isError, error } = goalsQuery;

  const { expenseMonthlyQuery } = useExpense();
  const expense = expenseMonthlyQuery;

  const topGoal =
    data && data.length > 0
      ? data.reduce((highest: GoalData, goal: GoalData) =>
          goal.percentage > highest.percentage ? goal : highest,
        )
      : null;

  const statCards: StatCard[] = [
    {
      id: "total-spent",
      link: "/expense",
      label: "Total Spent",
      value: expense.data?.totalMonthExpense || 0.0,
      percentageChange: -12,
      subLabel: "from last month",
    },
    {
      id: "monthly-budget",
      link: "/expense",
      label: "Monthly Budget",
      value: 30,
      percentageChange: 5,
      subLabel: "remaining this month",
    },
    {
      id: "saving-progress",
      link: "/saving",
      label: "Saving Progress",
      value: topGoal
        ? topGoal.amount.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })
        : 0.0,
      percentageChange: topGoal ? topGoal.percentage : 0,
      subLabel: topGoal ? `${topGoal.percentage}% of goal` : "No goals yet",
    },
    {
      id: "group-expense",
      link: "/split-bill",
      label: "Group Expense",
      value: 320,
      percentageChange: 3,
      subLabel: "shared this month",
    },
  ];

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <section className="grid grid-cols-4 gap-7 w-full mb-8.75">
      {statCards.map(({ link, percentageChange, value, label, subLabel }) => (
        <Link
          to={link}
          className="flex flex-col justify-between dark:bg-linear-to-tl dark:to-[#30373E] border border-gray-200 rounded-2xl shadow-2xl  p-6.25"
        >
          <header className="flex justify-between">
            <Wallet size={20} className="mx-4 my-5" />
            <div className="flex items-start">
              <div
                className={`flex gap-1 items-center rounded-2xl text-xl py-1 px-2 ${percentageChange < 0 ? " bg-red-500/10" : "bg-green-500/10"}`}
              >
                {percentageChange < 0 ? (
                  <TrendingDown size={13} className="ml-0.5 text-red-500" />
                ) : (
                  <TrendingUp size={13} className="ml-0.5 text-green-500" />
                )}
                <p className="text-[12px] font-semibold">
                  {Math.abs(percentageChange)}%
                </p>
              </div>
            </div>
          </header>

          <section>
            <div className="text-[#94A3B8] font-semibold">{label}</div>
            <div className="text-[#2CC66D] font-bold text-[28px]">
              {value.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </div>
            <div className="text-[#94A3B8] text-[12px]">{subLabel}</div>
          </section>
        </Link>
      ))}
    </section>
  );
};
