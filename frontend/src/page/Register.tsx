import { RightSideRegisterPage } from "@/components/register/rightSideRegister/RightSideRegister";
import { LeftSideRegisterPage } from "@/components/register/LeftSideRegister";
import type { FC, ReactElement } from "react";

export const RegisterPage: FC = (): ReactElement => {
  return (
    <div className="flex lg:w-full justify-center ">
      <div className="lg:w-1/2 w-full">
        <LeftSideRegisterPage />
      </div>
      <div className="lg:w-1/2">
        <RightSideRegisterPage />
      </div>
    </div>
  );
};
