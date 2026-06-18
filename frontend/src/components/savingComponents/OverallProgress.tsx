import { useSaving } from "@/hook/userSaving.hook";
import { Target } from "lucide-react";
import { useEffect } from "react";
import { toast } from "sonner";

export const OverallProgress = () => {
  const { savingQuery } = useSaving();
  const savings = savingQuery   ;

  useEffect(() => {
    if (savings.isError) {
      toast.error(savings.error.message);
    }
  }, [savings.isError, savings.error]);

  if (savings.isLoading) {
    return (
      <div className="flex justify-center p-10">
        <span className="animate-pulse text-gray-400 font-medium">
          Loading Savings...
        </span>
      </div>
    );
  }

  if (savings.isError) {
    return (
      <div role="alert" className="p-4 bg-red-50 rounded-lg">
        <span className="text-red-500 font-bold">
          Error: {savings.error.message}
        </span>
      </div>
    );
  }
  const data = savings.data;
  if (!data) return null;
  return (
    <article className="rounded-[20px] dark:bg-[#2C3546] border border-gray-300 dark:border-none p-7 mb-7">
      <header className="flex gap-2">
        <Target aria-hidden="true" />
        <h2 className="font-medium">Overall Progress</h2>
      </header>
      <section className="flex justify-between py-7">
        <p className="font-semibold text-3xl">${data.currentSavings ?? 0}</p>
        <p className="text-xl text-gray-400">of ${data.goalSavings ?? 0}</p>
      </section>
      <section className="flex justify-between pt-3 text-gray-400">
        <p>{data.percentageSaving ?? 0}% complete</p>
        <p>${data.remainingSaving ?? 0} to go</p>
      </section>
    </article>
  );
};
