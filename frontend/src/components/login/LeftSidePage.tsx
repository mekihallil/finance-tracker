import { Zap } from "lucide-react";
import type { FC, ReactElement } from "react";
import PremiumKpiSparklines from "./ChartCard";
import { Avatar, AvatarFallback, AvatarGroup } from "@/components/ui/avatar";
export const LeftSidePage: FC = (): ReactElement => {
  return (
    <div className="pt-13.5 mx-16">
      <section className="flex gap-3">
        <Zap size={30} className="my-auto" />
        <div>
          <p className="text-2xl text-[#29B866] font-bold">FinanceTracker</p>
          <p className="text-[13px] -mt-1 text-start text-gray-500 font-semibold">
            Professional Edition
          </p>
        </div>
      </section>
      <div>
        <div>
          <p className="mt-20 text-6xl font-display">
            Every dollar,
            <br /> in its place.
          </p>
          <p className="mt-13 text-xl">
            Track spending, grow your savings, and feel confident <br /> about
            what comes next.
          </p>
        </div>
        <div className="mt-10">
          <PremiumKpiSparklines />
        </div>
        <div className="pt-7">
          <span className="flex gap-2">
            <AvatarGroup>
              <Avatar>
                <AvatarFallback className="bg-orange-700 text-white border border-white">
                  AM
                </AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback className="bg-orange-700 text-white border border-white">
                  BC
                </AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback className="bg-orange-700 text-white border border-white">
                  OM
                </AvatarFallback>
              </Avatar>
            </AvatarGroup>
            <p className="flex pt-1">Trusted by 18,000+ mindful spenders</p>
          </span>
        </div>
        <p className="pt-12 text-gray-400 text-xs">
          Bank-level encryption. Your data stays yours.
        </p>
      </div>
    </div>
  );
};
