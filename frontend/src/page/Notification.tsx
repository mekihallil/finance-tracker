import { NotificationComp } from "@/components/notification/NotificationCom";
import type { FC, ReactElement } from "react";

export const Notification: FC = (): ReactElement => {
  return (
    <main>
      <div className="ml-80 mr-10">
        <NotificationComp />
      </div>
    </main>
  );
};
