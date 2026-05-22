import { CirclePlus, House, Moon, Sun, Target, Users, Zap } from "lucide-react";
import { useEffect, useState, type FC, type ReactElement } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

type nav = {
  title: string;
  icon: ReactElement;
  url: string;
};
const navData: nav[] = [
  { title: "Dashboard", icon: <House size={15} />, url: "/" },
  { title: "Expenses", icon: <CirclePlus size={15} />, url: "/expense" },
  { title: "Savings", icon: <Target size={15} />, url: "/savings" },
  { title: "Split Bills", icon: <Users size={15} />, url: "/split-bill" },
];

export const NavBar: FC = (): ReactElement => {
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [mode, setMode] = useState(isDark);
  const navigate = useNavigate();
  useEffect(() => {
    if (mode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);
  return (
    <>
      <section className="flex flex-col justify-between fixed top-0 dark:bg-[#181E27] shadow-2xl h-dvh w-72.5">
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
              {/* Dark and light modes  */}
              <div
                onClick={() => {
                  setMode(!mode);
                  {
                    toast(`Hello ${mode ? "Lightness" : "Darkness"} !`, {
                      icon: "👏",
                      style: {
                        borderRadius: "10px",
                        background: "#333",
                        color: "#fff",
                      },
                    });
                  }
                }}
              >
                {mode ? <Sun size={20} /> : <Moon size={20} />}
              </div>
            </div>
            <hr className="dark:text-gray-700 text-[#e3e2e2]" />
          </header>
          <section className="mt-8 mx-4.5">
            {navData.map((n) => {
              return (
                <div className="flex justify-between items-center h-12 w-63.75 my-4 pl-4 cursor-pointer hover:border hover:rounded-2xl hover:bg-[#29B866]">
                  <button onClick={() => navigate(n.url)} className="flex ">
                    <div className="flex items-center">{n.icon}</div>
                    <Link to={n.url}>{n.title}</Link>
                  </button>
                </div>
              );
            })}
          </section>
        </section>
        <footer className="text-center text-[13px] py-3">
          <hr className="dark:text-gray-700 text-[#e3e2e2]" />
          <p className="mt-4">Professional Finance Tracker</p>
          <p>v1.0 Premiun</p>
        </footer>
      </section>
    </>
  );
};
