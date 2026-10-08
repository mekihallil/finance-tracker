import type { FC, ReactElement } from "react";

export const NotificationComp: FC = (): ReactElement => {
  return (
    <header className="flex items-center justify-between">
      <div className="py-6">
        <h1 className="text-[26px] font-semibold">Notification</h1>
      </div>
    </header>
  );
};
