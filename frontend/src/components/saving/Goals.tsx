import { useSaving } from "@/hook/userSaving.hook";
import { Calendar } from "lucide-react";
import { useEffect, type FC, type ReactElement } from "react";
import { toast } from "sonner";
import { AddMoneyPopover } from "./AddMoneyPoppver";

export const Goals: FC = (): ReactElement | null => {
  const { goalsQuery } = useSaving();
  const goals = goalsQuery;
  useEffect(() => {
    if (goals.isError) {
      toast.error(goals.error.message);
    }
  }, [goals.isError, goals.error]);

  if (goals.isLoading) {
    return (
      <div className="flex justify-center p-10">
        <span className="animate-pulse text-gray-400 font-medium">
          Loading Savings...
        </span>
      </div>
    );
  }

  if (goals.isError) {
    return (
      <div role="alert" className="p-4 bg-red-50 rounded-lg">
        <span className="text-red-500 font-bold">
          Error: {goals.error.message}
        </span>
      </div>
    );
  }

  const data = goals.data;
  if (!data || !Array.isArray(data)) return null;

  const leftDays = (diff: number) => {
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30;
    const year = month * 12 + 5;

    const years = Math.floor(diff / year);
    const months = Math.floor(diff / month);
    const days = Math.floor(diff / day);
    const hours = Math.floor(diff / hour);
    const minutes = Math.floor(diff / minute);

    let label: string;
    if (years >= 1) label = `${years} year${years > 1 ? "s" : ""} left`;
    else if (months >= 1)
      label = `${months} month${months > 1 ? "s" : ""} left`;
    else if (days >= 1) label = `${days} day${days > 1 ? "s" : ""} left`;
    else if (hours >= 1) label = `${hours} hour${hours > 1 ? "s" : ""} left`;
    else if (minutes >= 1) label = `${minutes} minute${minutes > 1 ? "s" : ""} left`;
    else label = `0 day left`;

    return label;
  };
  return (
    <article className="grid grid-cols-2 gap-5 ">
      {data.map(
        ({
          _id,
          name,
          category,
          amount,
          goal,
          percentage,
          isComplete,
          diff,
        }) => {
          const Percentage = percentage ?? 0;
          return (
            <section
              key={_id}
              className="rounded-[20px] border border-gray-300 dark:bg-[#2C3546] dark:border-none p-7 "
            >
              <header className="flex justify-between gap-2">
                <h2 className="font-medium text-xl capitalize">{name}</h2>
                <h2 className="font-semibold text-[12px] capitalize bg-gray-400/25 rounded-2xl py-1 px-2">
                  {category}
                </h2>
              </header>
              <section className="flex justify-between py-7">
                <h1 className="font-semibold text-2xl">${amount}</h1>
                <h1 className="text-sm text-gray-400">of ${goal}</h1>
              </section>
              <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <div
                  className="h-full bg-emerald-500 rounded-r-full transition-all"
                  style={{ width: `${Math.min(Percentage, 100)}%` }}
                />
              </div>
              <section className="flex justify-between pt-3 text-gray-400">
                <h1>{Percentage ?? 0}% complete</h1>
                <div className="flex gap-2">
                  <Calendar size={15} className="my-auto" />
                  <h1>{leftDays(diff)}</h1>
                </div>
              </section>
              <section className="flex justify-center">
                <div className="flex justify-center">
                  <AddMoneyPopover savingId={_id} isComplete={isComplete} />
                </div>
              </section>
            </section>
          );
        },
      )}
    </article>
  );
};
