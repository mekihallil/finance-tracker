import { SplitTitle } from "@/components/split-bill/SavingTitle";
import { type FC, type ReactElement } from "react";

export const SplitBill: FC = (): ReactElement => {
  return (
    <section className="bg-[#FAFAFB] dark:bg-[#11161D]">
      <div className="ml-80 mr-10">
        <SplitTitle />
      </div>
    </section>
  );
};
