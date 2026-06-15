import { Award, Crown, Medal, Star, Trophy } from "lucide-react";
import type { FC, ReactElement } from "react";

type Rewards = {
  id: number;
  icon: ReactElement;
  name: string;
  description: string;
  status: "Earned" | "";
};
const rewards: Rewards[] = [
  {
    id: 1,
    icon: <Medal />,
    name: "First Saver",
    description: "Saved your first $100",
    status: "Earned",
  },
  {
    id: 2,
    icon: <Trophy />,
    name: "Consistent Saver",
    description: "Saved for 30 days straight",
    status: "Earned",
  },

  {
    id: 3,
    icon: <Crown size={24} color="white" />,
    name: "Goal Crusher",
    description: "Reached your first savings goal",
    status: "Earned",
  },

  {
    id: 4,
    icon: <Star size={24} color="white" />,
    name: "First Saver",
    description: "Saved your first $100",
    status: "Earned",
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
          {rewards.map((item) => {
            const Icon = item.icon;
            return (
              <div className="grid place-items-center  border-2 rounded-[20px] pt-6.5 pb-4.5 px-auto mt-6">
                <i
                  className={`${item.id === 3 ? "rounded-full flex items-center justify-center w-13 h-13 bg-[#51545B]" : item.id === 4 ? "rounded-full flex items-center justify-center w-13 h-13 bg-[#2B7FFF]" : ""}`}
                >
                  {Icon}
                </i>
                <div className="text-center">
                  <h3 className="">{item.name}</h3>
                  <h6 className="text-sm text-gray-400">{item.description}</h6>
                </div>
                <span className="text-sm mt-2">{item.status}</span>
              </div>
            );
          })}
        </section>
      </article>
    </>
  );
};
