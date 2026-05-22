import { type FC, type ReactElement } from "react";
import { Outlet } from "react-router";
import { NavBar } from "./page/NavBar";
export const App: FC = (): ReactElement => {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
