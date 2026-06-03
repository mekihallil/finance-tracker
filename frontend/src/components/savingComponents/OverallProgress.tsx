import { Target } from "lucide-react";
import type { FC, ReactElement } from "react";

export const OverallProgress: FC = (): ReactElement => {
  return (
    <>
      <article className="rounded-[20px] dark:bg-[#2C3546] p-7 mb-7">
        <header className="flex gap-2">
          <Target />
          <h2 className="font-medium ">Overall Progress</h2>
        </header>
        <section className="flex justify-between py-7  ">
          <h1 className="font-semibold text-3xl">$3600.00</h1>
          <h1 className="text-xl text-gray-400">of $6500.00</h1>
        </section>
        <section className="flex justify-between pt-3 text-gray-400">
          <h1>78.3% complete</h1>
          <h1>$2900.00 to go</h1>
        </section>
      </article>
    </>
  );
};
