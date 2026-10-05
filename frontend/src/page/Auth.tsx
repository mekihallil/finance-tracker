import { RightSidePage } from "@/components/login/RightSidePage";
import { LeftSidePage } from "@/components/login/LeftSidePage";
import type { FC, ReactElement } from "react";

export const Auth: FC = (): ReactElement => {
  return (
    <div className="flex w-full ">
      <div className="w-1/2">
        <LeftSidePage />
      </div>
      <div className="w-1/2">
        <RightSidePage />
      </div>
    </div>
  );
};
