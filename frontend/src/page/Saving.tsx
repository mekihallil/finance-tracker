import { AddSaving } from "@/components/saving/AddSaving";
import { BadgesAndRewards } from "@/components/saving/BadgesAndRewards";
import { Goals } from "@/components/saving/Goals";
import { OverallProgress } from "@/components/saving/OverallProgress";
import { SavingTitle } from "@/components/saving/SavingTitle";
import { SmartSavingsTips } from "@/components/saving/SmartSavingTip";
import { useState, type FC, type ReactElement } from "react";

export const Saving: FC = (): ReactElement => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section className="bg-[#FAFAFB] dark:bg-[#11161D]">
        <div className="ml-80 mr-10">
          <SavingTitle onClick={() => setOpen(!open)} />
          <OverallProgress />
          <AddSaving isOpen={open} />
          <Goals />
          <BadgesAndRewards />
          <SmartSavingsTips />
        </div>
      </section>
    </>
  );
};
