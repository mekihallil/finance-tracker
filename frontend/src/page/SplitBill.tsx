import { AddSplitBill } from "@/components/split-bill/AddSplitBill";
import { BalanceSummary } from "@/components/split-bill/BalanceSummary";
import { SplitBills } from "@/components/split-bill/SplitBills";
import { SplitTitle } from "@/components/split-bill/SplitTitle";
import { useCallback, useState, type FC, type ReactElement } from "react";

export const SplitBill: FC = (): ReactElement => {
  const [isAddOpen, setIsAddOpen] = useState(false);

  const openAddBill = useCallback(() => setIsAddOpen(true), []);
  const closeAddBill = useCallback(() => setIsAddOpen(false), []);

  return (
    <section>
      <div className="mx-4">
        <SplitTitle onOpen={openAddBill} />
        <BalanceSummary />
        <AddSplitBill isOpen={isAddOpen} onClose={closeAddBill} />
        <SplitBills />
      </div>
    </section>
  );
};
