import {
  Bell,
  CirclePlus,
  Dot,
  House,
  Menu,
  Moon,
  Sun,
  Target,
  Users,
  X,
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
  { id: 1, title: "Dashboard", icon: <House size={15} />, url: "/app" },
  {
    id: 2,
    title: "Transaction",
    icon: <CirclePlus size={15} />,
    url: "/app/transaction",
  },
  { id: 3, title: "Savings", icon: <Target size={15} />, url: "/app/saving" },
  {
    id: 4,
    title: "Split Bills",
    icon: <Users size={15} />,
    url: "/app/split-bill",
  },
  {
    id: 5,
    title: "notification",
    icon: <Bell size={15} />,
    url: "/app/notification",
  },
];

export const MenuBar: FC = (): ReactElement => {
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [mode, setMode] = useState(isDark);

  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (mode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);
  const path = useLocation().pathname;
  // console.log(path);

  return (
    <section className="flex flex-col justify-between top-0 right-0 left-0 dark:bg-[#181E27] shadow-2xl">
      <section className="flex justify-between py-2">
        <header className="text-center text-2xl ">
          <div className="flex items-center gap-2 py-2 px-8">
            <Zap size={30} />
            <div>
              <p className="text-xl text-[#29B866] font-bold">
                Finance Tracker Pro
              </p>
            </div>
          </div>
        </header>
        <section className="flex justify-end  items-center">
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
          <div className="flex px-3">
            {menuOpen ? (
              <button onClick={() => setMenuOpen(false)}>
                <X />
              </button>
            ) : (
              <button onClick={() => setMenuOpen(true)}>
                <Menu />
              </button>
            )}
          </div>
        </section>
      </section>
      {menuOpen &&
        navData.map(({ id, title, url, icon }) => {
          return (
            <div
              key={id}
              className="hover:text-black hover:translate-x-2 duration-300"
            >
              <Link
                to={url}
                className={`flex justify-between items-center h-10 mx-3 pl-4 cursor-pointer ${path == url ? "border rounded-3xl  bg-[#29B866]" : ""} `}
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
      <hr className="dark:text-gray-700 text-[#e3e2e2]" />
    </section>
  );
};
