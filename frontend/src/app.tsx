import { type FC, type ReactElement } from "react";
import { Dashboard } from "./page/Dashborad";
import NavBar from "./page/NavBar";
export const NavBar: FC = (): ReactElement => {
  return (
    <>
      <article>
        <NavBar>
          <Dashboard />
        </NavBar>
      </article>
    </>
  );
};
