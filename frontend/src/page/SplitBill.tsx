import { AddSplitBill } from "@/components/split-bill/AddSplitBill";
import { BalanceUtils } from "@/components/split-bill/BalanceUtils";
import { SplitTitle } from "@/components/split-bill/SplitTitle";
import { type FC, type ReactElement } from "react";

export const SplitBill: FC = (): ReactElement => {
  return (
    <section className="bg-[#FAFAFB] dark:bg-[#11161D]">
      <div className="ml-80 mr-10">
        <SplitTitle />
        <BalanceUtils />
        <AddSplitBill />
      </div>
    </section>
  );
};
