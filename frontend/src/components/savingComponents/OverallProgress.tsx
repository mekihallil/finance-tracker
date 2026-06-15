import { useSaving } from "@/hook/userSaving.hook";
import { Target } from "lucide-react";
import type { FC, ReactElement } from "react";

export const OverallProgress: FC = (): ReactElement => {
  const GetSavings = useSaving();
  const savings = GetSavings;

  if (savings.isLoading) {
    return <div>... loading</div>;
  }
  if (savings.isError) {
    return <div>error</div>;
  }
  const data = savings.data;
  return (
    <>
      <article className="rounded-[20px] dark:bg-[#2C3546] border border-gray-300 dark:border-none p-7 mb-7">
        <header className="flex gap-2">
          <Target />
          <h2 className="font-medium ">Overall Progress</h2>
        </header>
        <section className="flex justify-between py-7  ">
          <h1 className="font-semibold text-3xl">
            ${data.currentSavings || 0}
          </h1>
          <h1 className="text-xl text-gray-400">of ${data.goalSavings || 0}</h1>
        </section>
        <section className="flex justify-between pt-3 text-gray-400">
          <h1>{data.percentageSaving || 0}% complete</h1>
          <h1>${data.remainingSaving || 0} to go</h1>
        </section>
      </article>
    </>
  );
};
