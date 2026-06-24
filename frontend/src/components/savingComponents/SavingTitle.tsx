import { Plus } from "lucide-react";
import { type FC, type ReactElement } from "react";

interface savingTitleProp {
  onClick: () => void;
}
export const SavingTitle: FC<savingTitleProp> = ({ onClick }): ReactElement => {
  return (
    <>
      <article className="flex items-center justify-between">
        <div className="py-6">
          <p className="text-[26px] font-semibold">Savings Progress</p>
          <p className="text-[18px] text-[#64748B]">
            Track your savings goals and earn rewards
          </p>
        </div>
        <button type="button" onClick={onClick} className="...">
          <Plus size={18} className="my-auto" aria-hidden="true" />
          <span>Add Goal</span>
        </button>
      </article>
    </>
  );
};
