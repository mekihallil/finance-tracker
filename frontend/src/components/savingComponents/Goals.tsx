import { Calendar, DollarSign } from "lucide-react";
import type { FC, ReactElement } from "react";

export const Goals: FC = (): ReactElement => {
  return (
    <>
      <article className="grid grid-cols-2 ">
        <section className="rounded-[20px] dark:bg-[#2C3546] p-7 mb-7">
          <header className="flex justify-between gap-2">
            <h2 className="font-medium ">Goal Title</h2>
            <h2 className="font-semibold text-[12px] bg-[#444F61] rounded-2xl py-1 px-2">
              Category
            </h2>
          </header>
          <section className="flex justify-between py-7  ">
            <h1 className="font-semibold text-2xl">$3600.00</h1>
            <h1 className="text-sm text-gray-400">of $6500.00</h1>
          </section>
          <section className="flex justify-between pt-3 text-gray-400">
            <h1>78.3% complete</h1>
            <div className="flex gap-2">
              <Calendar size={15} className="my-auto" />
              <h1>0 days left</h1>
            </div>
          </section>
          <section className="flex justify-center gap-2 bg-[#263042] rounded-2xl p-1 mt-1">
            <DollarSign size={15} className="my-auto" />
            <button>Add Money</button>
          </section>
        </section>
      </article>
    </>
  );
};
