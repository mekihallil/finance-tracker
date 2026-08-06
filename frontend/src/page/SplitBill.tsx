import { AddSplitBill } from "@/components/split-bill/AddSplitBill";
import { BalanceUtils } from "@/components/split-bill/BalanceUtils";
import { SplitTitle } from "@/components/split-bill/SplitTitle";
import { useState, type FC, type ReactElement } from "react";

export const SplitBill: FC = (): ReactElement => {
  const [open,setOpen]=useState(false)
  return (
    <section className="bg-[#FAFAFB] dark:bg-[#11161D]">
      <div className="ml-80 mr-10">
        <SplitTitle onClick={()=> setOpen(!open)} />
        <BalanceUtils />
        <AddSplitBill isOpen={open} onClick={()=> setOpen(!open)}/>
      </div>
    </section>
  );
};
