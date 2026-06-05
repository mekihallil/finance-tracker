import { Plus } from "lucide-react";
import type { FC, ReactElement } from "react";

export const SavingTitle: FC = (): ReactElement => {
  return (
    <>
      <article className="flex items-center justify-between">
        <div className="py-6">
          <p className="text-[26px] font-semibold">Savings Progress</p>
          <p className="text-[18px] text-[#64748B]">
            Track your savings goals and earn rewards
          </p>
        </div>
        <button className="flex gap-3">
          <Plus size={18} className="my-auto"/>
          <p>Add Goal</p>
        </button>
      </article>
    </>
  );
};
