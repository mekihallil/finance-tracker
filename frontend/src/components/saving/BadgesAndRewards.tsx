import { Award, Crown, Medal, Star, Trophy } from "lucide-react";
import type { ComponentType, FC, ReactElement } from "react";

type BadgeStatus = "earned" | "locked";
type Reward = {
  id: number;
  icon: ComponentType<{ size?: number; color?: string }>;
  name: string;
  description: string;
  status: BadgeStatus;
};
const reward: Reward[] = [
  {
    id: 1,
    icon: Medal,
    name: "First Saver",
    description: "Saved your first $100",
    status: "earned",
  },
  {
    id: 2,
    icon: Trophy,
    name: "Consistent Saver",
    description: "Saved for 30 days straight",
    status: "earned",
  },

  {
    id: 3,
    icon: Crown,
    name: "Goal Crusher",
    description: "Reached your first savings goal",
    status: "earned",
  },

  {
    id: 4,
    icon: Star,
    name: "First Saver",
    description: "Saved your first $100",
    status: "earned",
  },
];

export const BadgesAndRewards: FC = (): ReactElement => {
  return (
    <>
      <article className="rounded-[20px] dark:bg-[#2C3546] border border-gray-300 dark:border-none p-7 mb-7 mt-7">
        <header className="flex gap-2">
          <Award />
          <h2 className="font-medium ">Badges & Rewards</h2>
        </header>
        <section className="grid grid-cols-4 gap-3 justify-center">
          {reward.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="grid place-items-center  border-2 rounded-[20px] pt-6.5 pb-4.5 px-auto mt-6"
              >
                <span
                  className={`${item.id === 3 ? "rounded-full flex items-center justify-center w-13 h-13 bg-[#51545B]" : item.id === 4 ? "rounded-full flex items-center justify-center w-13 h-13 bg-[#2B7FFF]" : ""}`}
                >
                  <Icon size={30} color="white" />
                </span>
                <div className="text-center">
                  <h3>{item.name}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
                <span className="text-sm mt-2">
                  {item.status === "earned" ? (
                    <span className="text-green-400">Earned</span>
                  ) : (
                    <span className="text-gray-400">Locked</span>
                  )}
                </span>
              </div>
            );
          })}
        </section>
      </article>
    </>
  );
};
