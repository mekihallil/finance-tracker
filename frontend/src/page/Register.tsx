import { RightSideRegisterPage } from "@/components/register/rightSideRegister/RightSideRegister";
import { LeftSideRegisterPage } from "@/components/register/LeftSideRegister";
import type { FC, ReactElement } from "react";

export const RegisterPage: FC = (): ReactElement => {
  return (
    <div className="flex w-full ">
      <div className="w-1/2">
        <LeftSideRegisterPage />
      </div>
      <div className="w-1/2">
        <RightSideRegisterPage />
      </div>
    </div>
  );
};
