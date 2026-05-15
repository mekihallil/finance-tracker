import { TrendingDown, Wallet } from "lucide-react";
import type { FC, ReactElement } from "react";

export const TotalInfo: FC = (): ReactElement => {
  return (
    <>
      <article>
        <section className="flex gap-8 mb-8.75 pr-8 ">
          {/* Total spend  */}
          <article className="flex flex-col justify-between dark:bg-linear-to-tl dark:to-[#30373E] border border-gray-200 rounded-2xl shadow-2xl w-68.75 p-6.25 ">
            <header className="flex justify-between">
              <Wallet size={20} className="mx-4 my-5" />
              <div>
                <div className="flex gap-1 items-center rounded-2xl px-1.75 py-0.75 dark:bg-[#3D2025] text-[#FF6467]">
                  <TrendingDown size={13} className="ml-0.5" />
                  <p className="text-[12px] font-semibold">12% </p>
                </div>
              </div>
            </header>
            <section className="">
              <div className="text-[#94A3B8] font-semibold">Total Spent</div>
              <div className="text-[#2CC66D] font-bold text-[28px]">
                $1250.75
              </div>
              <div className="text-[#94A3B8] text-[12px]">from last month</div>
            </section>
          </article>
          {/* Monthly Budget  */}
          <article className="flex flex-col justify-between dark:bg-linear-to-tl dark:to-[#30373E] border border-gray-200 rounded-2xl shadow-2xl w-68.75 p-6.25 ">
            <header className="flex justify-between">
              <Wallet size={20} className="mx-4 my-5" />
              <div>
                <div className="flex gap-1 items-center rounded-2xl px-1.75 py-0.75 dark:bg-[#3D2025] text-[#FF6467]">
                  <TrendingDown size={13} className="ml-0.5" />
                  <p className="text-[12px] font-semibold">12% </p>
                </div>
              </div>
            </header>
            <section className="">
              <div className="text-[#94A3B8] font-semibold">Total Spent</div>
              <div className="text-[#2CC66D] font-bold text-[28px]">
                $1250.75
              </div>
              <div className="text-[#94A3B8] text-[12px]">from last month</div>
            </section>
          </article>
          {/* saving progress  */}
          <article className="flex flex-col justify-between dark:bg-linear-to-tl dark:to-[#30373E] border border-gray-200 rounded-2xl shadow-2xl w-68.75 p-6.25 ">
            <header className="flex justify-between">
              <Wallet size={20} className="mx-4 my-5" />
              <div>
                <div className="flex gap-1 items-center rounded-2xl px-1.75 py-0.75 dark:bg-[#3D2025] text-[#FF6467]">
                  <TrendingDown size={13} className="ml-0.5" />
                  <p className="text-[12px] font-semibold">12% </p>
                </div>
              </div>
            </header>
            <section className="">
              <div className="text-[#94A3B8] font-semibold">Total Spent</div>
              <div className="text-[#2CC66D] font-bold text-[28px]">
                $1250.75
              </div>
              <div className="text-[#94A3B8] text-[12px]">from last month</div>
            </section>
          </article>
          {/* Group Expense  */}
          <article className="flex flex-col justify-between dark:bg-linear-to-tl dark:to-[#30373E] border border-gray-200 rounded-2xl shadow-2xl w-68.75 p-6.25 ">
            <header className="flex justify-between">
              <Wallet size={20} className="mx-4 my-5" />
              <div>
                <div className="flex gap-1 items-center rounded-2xl px-1.75 py-0.75 dark:bg-[#3D2025] text-[#FF6467]">
                  <TrendingDown size={13} className="ml-0.5" />
                  <p className="text-[12px] font-semibold">12% </p>
                </div>
              </div>
            </header>
            <section className="">
              <div className="text-[#94A3B8] font-semibold">Total Spent</div>
              <div className="text-[#2CC66D] font-bold text-[28px]">
                $1250.75
              </div>
              <div className="text-[#94A3B8] text-[12px]">from last month</div>
            </section>
          </article>
        </section>
      </article>
    </>
  );
};
