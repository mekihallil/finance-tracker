import { CirclePlus, House, Target, Users } from "lucide-react";
import type { FC, ReactElement } from "react";

type nav = {
  title: string;
  icon: ReactElement;
};
const navData: nav[] = [
  { title: "Dashboard", icon: <House size={15} /> },
  { title: "Expenses", icon: <CirclePlus size={15} /> },
  { title: "Savings", icon: <Target size={15} /> },
  { title: "Split Bills", icon: <Users size={15} /> },
];

export const NavBar: FC = (): ReactElement => {
  return (
    <>
      <section className="flex flex-col justify-between fixed  bg-[#181E27] h-dvh w-72.5">
        <section>
          <header className="text-center text-2xl">
            <p className="py-6.25">Finance Tracker</p>
            <hr />
          </header>
          <section className="text-[17px] mt-8 mx-4.5">
            {navData.map((n) => {
              return (
                <div className="flex justify-between items-center h-12 w-63.75 my-4 pl-4 hover:border hover:rounded-2xl hover:bg-[#29B866] cursor-pointer ">
                  <section className="flex ">
                    <div className="flex items-center">{n.icon}</div>
                    <p className="pl-4"> {n.title}</p>
                  </section>
                </div>
              );
            })}
          </section>
        </section>
        <footer className="text-center">
          <hr />
          <p className="mt-4">Finance Tracker</p>
          <p>v1.0 Premiun</p>
        </footer>
      </section>
    </>
  );
};
