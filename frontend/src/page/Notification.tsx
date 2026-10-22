import { NotificationComp } from "@/components/notification/NotificationCom";
import type { FC, ReactElement } from "react";

export const Notification: FC = (): ReactElement => {
  return (
    <main>
      <div className="px-5 lg:ml-80 lg:mr-10">
        <NotificationComp />
      </div>
    </main>
  );
};
