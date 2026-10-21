import { LeftSideLogin } from "@/components/login/leftSideLogin/LeftSideLogin";
import { RightSideLogin } from "@/components/login/RightSideLogin";
import type { FC, ReactElement } from "react";

export const LoginPage: FC = (): ReactElement => {
  return (
    <div className="flex lg:w-full justify-center ">
      <div className="lg:w-1/2">
        <LeftSideLogin />
      </div>
      <div className="lg:w-1/2 w-full">
        <RightSideLogin />
      </div>
    </div>
  );
};
