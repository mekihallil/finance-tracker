import { AddSaving } from "@/components/savingComponents/AddSaving";
import { BadgesAndRewards } from "@/components/savingComponents/BadgesAndRewards";
import { Goals } from "@/components/savingComponents/Goals";
import { OverallProgress } from "@/components/savingComponents/OverallProgress";
import { SavingTitle } from "@/components/savingComponents/SavingTitle";
import { SmartSavingsTips } from "@/components/savingComponents/SmartSavingTip";
import type { FC, ReactElement } from "react";

export const Saving: FC = (): ReactElement => {
  return (
    <>
      <section className="bg-[#FAFAFB] dark:bg-[#11161D]">
        <div className="ml-80 mr-10">
          <SavingTitle />
          <OverallProgress />
          <Goals />
          <AddSaving />
          <BadgesAndRewards />
          <SmartSavingsTips />
        </div>
      </section>
    </>
  );
};
