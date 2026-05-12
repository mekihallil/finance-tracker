import { CirclePlus, House, Sun, Target, Users, Zap } from "lucide-react";
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
          <header className="text-center text-2xl ">
            <div className="flex items-center justify-between py-6.25 px-8">
              <Zap size={30} />
              <p>
                <p className="text-xl text-[#29B866] font-bold">
                  FinanceTracker
                </p>
                <p className="text-[13px] text-start text-gray-500 font-semibold">
                  Professional Edition
                </p>
              </p>
              <Sun size={15} />
            </div>
            <hr className="text-gray-700" />
          </header>
          <section className="mt-8 mx-4.5">
            {navData.map((n) => {
              return (
                <div className="flex justify-between items-center h-12 w-63.75 my-4 pl-4 cursor-pointer hover:border hover:rounded-2xl hover:bg-[#29B866]">
                  <section className="flex ">
                    <div className="flex items-center">{n.icon}</div>
                    <p className="pl-6 "> {n.title}</p>
                  </section>
                </div>
              );
            })}
          </section>
        </section>
        <footer className="text-center text-sm py-3">
          <hr className="text-gray-700" />
          <p className="mt-4">Professional Finance Tracker</p>
          <p>v1.0 Premiun</p>
        </footer>
      </section>
    </>
  );
};
