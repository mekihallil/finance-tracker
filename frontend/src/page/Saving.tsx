import { AddSaving } from "@/components/savingComponents/AddSaving";
import { BadgesAndRewards } from "@/components/savingComponents/BadgesAndRewards";
import { OverallProgress } from "@/components/savingComponents/OverallProgress";
import { SavingTitle } from "@/components/savingComponents/SavingTitle";
import type { FC, ReactElement } from "react";

export const Saving: FC = (): ReactElement => {
  return (
    <>
      <section>
        <div className="ml-80 mr-10">
          <SavingTitle />
          <OverallProgress />
          <AddSaving />
          <BadgesAndRewards/>
        </div>
      </section>
    </>
  );
};
