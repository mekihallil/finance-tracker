import { useSaving } from "@/hook/userSaving.hook";
import { Calendar } from "lucide-react";
import { useEffect, type FC, type ReactElement } from "react";
import { toast } from "sonner";
import { UpdatePopoverPage } from "./UpdatePopoverPage";

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

  return (
    <article className="grid grid-cols-2 gap-5 ">
      {data.map((item) => (
        <section
          key={item._id}
          className="rounded-[20px] border border-gray-300 dark:bg-[#2C3546] dark:border-none p-7 "
        >
          <header className="flex justify-between gap-2">
            <h2 className="font-medium text-xl capitalize">{item.name}</h2>
            <h2 className="font-semibold text-[12px] capitalize bg-gray-400/25 rounded-2xl py-1 px-2">
              {item.category}
            </h2>
          </header>
          <section className="flex justify-between py-7">
            <h1 className="font-semibold text-2xl">${item.amount}</h1>
            <h1 className="text-sm text-gray-400">of ${item.goal}</h1>
          </section>
          <section className="flex justify-between pt-3 text-gray-400">
            <h1>{item.percentage ?? 0}% complete</h1>
            <div className="flex gap-2">
              <Calendar size={15} className="my-auto" />
              <h1>0 days left</h1>
            </div>
          </section>
          <section className="flex justify-center">
            <button className="flex justify-center">
              <UpdatePopoverPage />
            </button>
          </section>
        </section>
      ))}
    </article>
  );
};
