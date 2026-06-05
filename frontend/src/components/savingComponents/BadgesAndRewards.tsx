import { Award, Medal } from "lucide-react";
import type { FC, ReactElement } from "react";

export const BadgesAndRewards: FC = (): ReactElement => {
  return (
    <>
      <article className="rounded-[20px] dark:bg-[#2C3546] p-7 mb-7 mt-5">
        <header className="flex gap-2">
          <Award />
          <h2 className="font-medium ">Badges & Rewards</h2>
        </header>
        <section className="flex">
          <div className="grid place-items-center  border-2 rounded-[20px] pt-6.5 pb-4.5 px-17.25 mt-6">
            <Medal />
            <h3 className="mt-4">First Saver</h3>
            <h6 className="text-sm text-gray-400">Saved your first $100</h6>
            <span className="text-sm mt-2">Earned</span>
          </div>
        </section>
      </article>
    </>
  );
};
