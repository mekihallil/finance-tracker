import { type FC, type ReactElement } from "react";
import { Outlet } from "react-router";
import { NavBar } from "./page/NavBar";
import { MenuBar } from "./page/MenuBar";
export const App: FC = (): ReactElement => {
  return (
    <div>
      <div className="hidden lg:block">
        <NavBar />
      </div>
      <div className="lg:hidden">
        <MenuBar />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
