import {
  Goal,
  Plus,
  Sparkles,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { FC, ReactElement } from "react";
import { Link } from "react-router";

interface actionItem {
  label: string;
  icon: LucideIcon;
  href: string;
  bgColor: string;
}

const actionList: actionItem[] = [
  {
    label: "Add Expenses",
    icon: Plus,
    href: "/expense",
    bgColor: "#15AE7B",
  },
  {
    label: "Set Goal",
    icon: Goal,
    href: "/saving",
    bgColor: "#246CFE",
  },
  {
    label: "Split Bill",
    icon: Users,
    href: "/",
    bgColor: "#A840FF",
  },
  {
    label: "View Trends",
    icon: TrendingUp,
    href: "/",
    bgColor: "#F8590C",
  },
];

export const QuickAction: FC = (): ReactElement => {
  return (
    <>
      <section>
        <header>
          <section className="my-8.75 px-11 border border-gray-200 rounded-3xl shadow-2xl  dark:bg-[#182029] dark:border-[#182029] ">
            <section className="flex items-center pt-4 ">
              <Sparkles size={15} />
              <h1 className=" pl-4">
                <p className="text-[#29B866] font-bold">Quick Actions</p>
                <p className="text-[#84A3B8]">
                  Manage your finances efficiently
                </p>
              </h1>
            </section>
            {/* quick cardes */}
            <nav className="grid grid-cols-4 gap-4 mt-8 mb-6">
              {actionList.map((action) => {
                const Icon = action.icon;
                return (
                  <Link
                    to={action.href}
                    className={`bg-[${action.bgColor}] rounded-2xl text-center p-5`}
                  >
                    <Icon size={15} className="m-auto" />
                    <p className="pl-2">{action.label}</p>
                  </Link>
                );
              })}
            </nav>
          </section>
        </header>
      </section>
    </>
  );
};
