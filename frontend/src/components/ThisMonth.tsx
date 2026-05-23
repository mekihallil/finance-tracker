import { Calendar, DollarSign, Tag } from "lucide-react";
import type { FC, ReactElement } from "react";

type MonthData = {
  id: number;
  title: string;
  amount: number;
  icon: ReactElement;
  color: string;
};

const monthData: MonthData[] = [
  {
    id: 1,
    title: "This Month",
    amount: 124.5,
    icon: <Calendar size={20} />,
    color: "text-blue-600",
  },
  {
    id: 2,
    title: "Transctions",
    amount: 5,
    icon: <Tag size={30} />,
    color: "text-green-600",
  },
  {
    id: 3,
    title: "Average Per Day",
    amount: 1200.0,
    icon: <DollarSign size={20} />,
    color: "text-red-600",
  },
];

export const ThisMonth: FC = (): ReactElement => {
  return (
    <>
      <section className="mt-8">
        <div className="grid grid-cols-3 gap-8 ">
          {monthData.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.id}
                className="flex items-center shadow-2xl rounded-2xl dark:bg-[#2C3546] p-6 "
              >
                <div className="pr-3">{Icon}</div>
                <div>
                  <p className=" text-[#64748B] font-medium">{item.title}</p>
                  <h1 className="text-2xl font-bold">{item.amount}</h1>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};
