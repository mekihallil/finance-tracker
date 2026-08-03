import { Plus } from "lucide-react";
import { type FC, type ReactElement } from "react";

interface savingTitleProps {
  onClick: () => void;
}
export const SavingTitle: FC<savingTitleProps> = ({ onClick }): ReactElement => {
  return (
      <header className="flex items-center justify-between">
        <div className="py-6">
          <h1 className="text-[26px] font-semibold">Savings Progress</h1>
          <p className="text-[18px] text-[#64748B]">
            Track your savings goals and earn rewards
          </p>
        </div>
        <button type="button" onClick={onClick} className="flex gap-3 border rounded-2xl px-4 py-2 hover:-translate-y-1 ">
          <Plus size={18} className="my-auto" aria-hidden="true" />
          <span>Add Goal</span>
        </button>
      </header>
  );
};
