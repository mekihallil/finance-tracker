import { Plus } from "lucide-react";
import { type FC, type ReactElement } from "react";

interface splitTitleProps {
  onClick: () => void;
}

export const SplitTitle: FC<splitTitleProps> = ({ onClick }): ReactElement => {
  return (
    <article className="flex items-center justify-between">
      <div className="py-6">
        <p className="text-[26px] font-semibold">Split Bills</p>
        <p className="text-[18px] text-[#64748B]">
          Split expenses with friends and track payments
        </p>
      </div>
      <button
        type="button"
        onClick={onClick}
        className="flex gap-3 border rounded-2xl px-4 py-2 hover:-translate-y-1 "
      >
        <Plus size={18} className="my-auto" aria-hidden="true" />
        <span>New Split</span>
      </button>
    </article>
  );
};
