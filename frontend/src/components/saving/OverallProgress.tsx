import { useSaving } from "@/hook/userSaving.hook";
import { Target } from "lucide-react";
import { useEffect } from "react";
import { toast } from "sonner";

export const OverallProgress = () => {
  const { savingQuery } = useSaving();
  const { data, isLoading, isError, error } = savingQuery;

  useEffect(() => {
    if (isError) {
      toast.error(error.message);
    }
  }, [isError, error]);

  if (isLoading) {
    return (
      <div className="flex justify-center p-10">
        <span className="animate-pulse text-gray-400 font-medium">
          Loading Savings...
        </span>
      </div>
    );
  }

  if (isError) {
    return (
      <div role="alert" className="p-4 bg-red-50 rounded-lg">
        <span className="text-red-500 font-bold">Error: {error.message}</span>
      </div>
    );
  }

  const formatMoney = (value: number) =>
    value.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  const currentSavings = formatMoney(Number(data.currentSavings ?? 0));
  const goalSavings = formatMoney(Number(data.goalSavings ?? 0));
  const percentageSaving = formatMoney(Number(data.percentageSaving ?? 0));
  const remainingSaving = formatMoney(Number(data.remainingSaving ?? 0));

  return (
    <article className="rounded-[20px] dark:bg-[#2C3546] border border-gray-300 dark:border-none p-7 mb-7">
      <header className="flex gap-2">
        <Target aria-hidden="true" />
        <h2 className="font-medium">Overall Progress</h2>
      </header>
      <section className="flex justify-between py-7">
        <p className="font-semibold text-3xl">${currentSavings}</p>
        <p className="text-xl text-gray-400">of ${goalSavings}</p>
      </section>
      <section className="flex justify-between pt-3 text-gray-400">
        <p>{percentageSaving}% complete</p>
        <p>${remainingSaving} to go</p>
      </section>
    </article>
  );
};
