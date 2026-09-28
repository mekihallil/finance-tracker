import { useTransaction } from "@/hook/userNewTransaction.hook";
import { useSaving } from "@/hook/userSaving.hook";
import { useSplit } from "@/hook/userSplit.hook";
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
  trendStatus: number;
  subLabel: string;
}

export const AccountSummary: FC = (): ReactElement | null => {
  const { goalsQuery } = useSaving();
  const {
    data: goals,
    isLoading: goalIsLoading,
    isError: goalIsError,
    error: goalError,
  } = goalsQuery;

  const { getTransactionQuery } = useTransaction();
  const {
    data: transactions,
    isLoading: transactionIsLoading,
    isError: transactionIsError,
    error: transactionError,
  } = getTransactionQuery;
  const { getSplitQuery } = useSplit();
  const {
    data: split,
    isLoading: splitIsLoading,
    isError: splitIsError,
    error: splitError,
  } = getSplitQuery;

  // error handling
  if (!goals || !transactions || !split) return null;
  const isLoading = goalIsLoading || transactionIsLoading || splitIsLoading;
  const isError = goalIsError || transactionIsError || splitIsError;
  const error = goalError || transactionError || splitError;

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;

  const {
    totalMonthExpense,
    diffrenceFromLastMonth,
    percentageFromLastMonth,
    monthlyBudget,
    monthlyRemainingBudget,
    budgetDifferenceFromLastMonth,
    budgetPercentageFromLastMonth,
  } = transactions;

  const { individualExpense } = split;

  const topGoal =
    goals && goals.length > 0
      ? goals.reduce((highest: GoalData, goal: GoalData) =>
          goal.percentage > highest.percentage ? goal : highest,
        )
      : null;

  const statCards: StatCard[] = [
    {
      id: "total-spent",
      link: "/Transaction",
      label: "Total Spent",
      value: totalMonthExpense || 0.0,
      percentageChange: percentageFromLastMonth || 0,
      trendStatus: diffrenceFromLastMonth,
      subLabel: "from last month",
    },
    {
      id: "monthly-budget",
      link: "/Transaction",
      label: "Monthly Budget",
      value: monthlyBudget,
      percentageChange: budgetPercentageFromLastMonth,
      trendStatus: budgetDifferenceFromLastMonth,
      subLabel: `${monthlyRemainingBudget.toLocaleString("en-us", {
        style: "currency",
        currency: "USD",
      })} remaining `,
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
      trendStatus: topGoal,
      subLabel: topGoal ? `${topGoal.percentage}% of goal` : "No goals yet",
    },
    {
      id: "group-Expense",
      link: "/split-bill",
      label: "Group Expenses",
      value: individualExpense,
      percentageChange: 0,
      trendStatus: -2,
      subLabel: "shared with friends",
    },
  ];

  return (
    <section className="grid grid-cols-4 gap-7 w-full mb-8.75">
      {statCards.map(
        ({
          id,
          link,
          percentageChange,
          trendStatus,
          value,
          label,
          subLabel,
        }) => (
          <Link
            key={id}
            to={link}
            className="flex flex-col justify-between dark:bg-linear-to-tl dark:to-[#30373E] border border-gray-200 rounded-2xl shadow-2xl  p-6.25"
          >
            <header className="flex justify-between">
              <Wallet size={20} className="mx-4 my-5" />
              <div className="flex items-start">
                <div
                  className={`flex gap-1 items-center rounded-2xl text-xl py-1 px-2 ${trendStatus < 0 ? " bg-red-500/10" : "bg-green-500/10"} ${id === "group-Expense" ? "hidden" : "block"}`}
                >
                  {trendStatus < 0 ? (
                    <TrendingDown size={13} className="ml-0.5 text-red-500" />
                  ) : (
                    <TrendingUp size={13} className="ml-0.5 text-green-500" />
                  )}
                  <p className="text-[12px] font-semibold">
                    {percentageChange > 0 ? Math.round(percentageChange) : 0}%
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
        ),
      )}
    </section>
  );
};
