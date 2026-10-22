import { useAuth } from "@/hook/useAuth.hook";
import {
  Bell,
  CirclePlus,
  Dot,
  House,
  LogOut,
  Moon,
  Sun,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { useEffect, useState, type FC, type ReactElement } from "react";
import { Link, useLocation } from "react-router";
import { toast } from "sonner";

type nav = {
  id: number;
  title: string;
  icon: ReactElement;
  url: string;
};
const navData: nav[] = [
  { id: 1, title: "Dashboard", icon: <House size={15} />, url: "/" },
  {
    id: 2,
    title: "Transaction",
    icon: <CirclePlus size={15} />,
    url: "/transaction",
  },
  { id: 3, title: "Savings", icon: <Target size={15} />, url: "/saving" },
  {
    id: 4,
    title: "Split Bills",
    icon: <Users size={15} />,
    url: "/split-bill",
  },
  {
    id: 5,
    title: "notification",
    icon: <Bell size={15} />,
    url: "/notification",
  },
];

export const NavBar: FC = (): ReactElement => {
  const { logout } = useAuth();

  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [mode, setMode] = useState(isDark);
  useEffect(() => {
    if (mode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);
  const path = useLocation().pathname;

  return (
    <>
      <section className="lg:flex flex-col justify-between fixed top-0 dark:bg-[#181E27] shadow-2xl h-dvh w-72.5 hidden">
        <section>
          <header className="text-center text-2xl ">
            <div className="flex items-center justify-between py-6.25 px-8">
              <Zap size={30} />
              <div>
                <p className="text-xl text-[#29B866] font-bold">
                  FinanceTracker
                </p>
                <p className="text-[13px] text-start text-gray-500 font-semibold">
                  Professional Edition
                </p>
              </div>
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
            {navData.map(({ id, title, url, icon }) => {
              return (
                <div
                  key={id}
                  className="hover:text-black hover:translate-x-2 duration-300"
                >
                  <Link
                    to={url}
                    className={`flex justify-between items-center h-12 w-63.75 my-4 pl-4 cursor-pointer ${path == url && "border rounded-3xl  bg-[#29B866]"} `}
                  >
                    <div className="flex ">
                      <div className="flex items-center px-3">{icon}</div>
                      <p>{title}</p>
                    </div>
                    {path == url && <Dot size={40} />}
                  </Link>
                </div>
              );
            })}
          </section>
        </section>
        <footer>
          <div className="flex justify-end mx-4 items-center gap-2 cursor-pointer">
            <LogOut size={15} />
            <button onClick={() => logout()}>Login</button>
          </div>
          <div className="text-center text-[13px] py-3">
            <hr className="dark:text-gray-700 text-[#e3e2e2]" />
            <p className="mt-4">Professional Finance Tracker</p>
            <p>v1.0 Premiun</p>
          </div>
        </footer>
      </section>
    </>
  );
};
