import { LeftSideLogin } from "@/components/login/leftSideLogin/LeftSideLogin";
import { RightSideLogin } from "@/components/login/RightSideLogin";
import type { FC, ReactElement } from "react";

export const LoginPage: FC = (): ReactElement => {
  return (
    <div className="flex w-full ">
      <div className="w-1/2">
        <LeftSideLogin />
      </div>
      <div className="w-1/2">
        <RightSideLogin />
      </div>
    </div>
  );
};
