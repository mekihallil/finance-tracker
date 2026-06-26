import { AddSaving } from "@/components/savingComponents/AddSaving";
import { BadgesAndRewards } from "@/components/savingComponents/BadgesAndRewards";
import { Goals } from "@/components/savingComponents/Goals";
import { OverallProgress } from "@/components/savingComponents/OverallProgress";
import { SavingTitle } from "@/components/savingComponents/SavingTitle";
import { SmartSavingsTips } from "@/components/savingComponents/SmartSavingTip";
import { useState, type FC, type ReactElement } from "react";

interface savingProp {
  OnClick: () => void;
}

export const Saving: FC<savingProp> = (): ReactElement => {
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
