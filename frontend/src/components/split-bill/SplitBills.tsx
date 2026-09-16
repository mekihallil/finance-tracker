import { useSplit } from "@/hook/userSplit.hook";
import {
  CarTaxiFront,
  Check,
  House,
  MoreHorizontal,
  PizzaIcon,
  Plane,
  Trash2,
  Zap,
} from "lucide-react";
import { useEffect, type FC, type ReactElement, type ReactNode } from "react";
import { toast } from "sonner";

interface categoryProps {
  categoryId: string;
  icon: ReactNode;
}

const categoryIcon: categoryProps[] = [
  {
    categoryId: "Food",
    icon: <PizzaIcon size={20} />,
  },
  {
    categoryId: "Rent",
    icon: <House size={20} />,
  },
  {
    categoryId: "Taxi",
    icon: <CarTaxiFront size={20} />,
  },
  {
    categoryId: "Travel",
    icon: <Plane size={20} />,
  },
  {
    categoryId: "Utilities",
    icon: <Zap size={20} />,
  },
  {
    categoryId: "Other",
    icon: <MoreHorizontal size={20} />,
  },
];

interface splitParticipantsProps {
  _id: string;
  name: string;
}

export const SplitBills: FC = (): ReactElement | null => {
  const { getSplitQuery } = useSplit();
  const split = getSplitQuery;
  const { isError, error, isLoading } = split;

  const formatDate = (date: string) => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    return formattedDate;
  };

  const splitBill = (amount: number, participants: number) => {
    return (amount / participants).toFixed(2);
  };

  useEffect(() => {
    if (error) {
      toast.error(error.message);
    }
  }, [isError, error]);

  if (isLoading) {
    return (
      <div className="flex justify-center p-10">
        <span className="animate-pulse text-gray-400 font-medium">
          Loading Savings...
        </span>
      </div>
    );
  }

  if (isError) {
    return (
      <div role="alert" className="p-4 bg-red-50 rounded-lg">
        <span className="text-red-500 font-bold">Error: {error.message}</span>
      </div>
    );
  }

  const { data } = split;
  if (!data || !Array.isArray(data)) return null;
  return (
    <div>
      {data.map(({ _id, title, category, amount, participants, createdAt }) => {
        const CategoryIcon = categoryIcon.find(
          (c) => c.categoryId === category,
        )?.icon;
        return (
          <article
            key={_id}
            className="border border-gray-300 rounded-3xl p-7 mt-8 shadow-2xl dark:bg-[#2C3546]"
          >
            <main>
              <div className="flex justify-between">
                <section className="flex gap-4">
                  <div>{CategoryIcon}</div>
                  <div>
                    <p className="text-[17px] font-semibold">{title}</p>
                    <p className="text-[14px] text-gray-400 font-medium">
                      Created by You on {formatDate(createdAt)}
                    </p>
                    <div className="flex gap-2 mt-1">
                      <h2 className="font-semibold text-[12px] capitalize bg-gray-400/25 rounded-2xl my-auto py-0.5 px-2">
                        2 Pending
                      </h2>
                      <h2>Total: ${amount}</h2>
                    </div>
                  </div>
                </section>
                <section>
                  <div className="flex gap-5 mr-5 ">
                    <div>
                      <h1 className="text-[18px] font-semibold">
                        Your share: ${splitBill(amount, participants.length)}
                      </h1>
                      <div className="flex gap-2">
                        <Check size={18} className="my-auto" />
                        <h1>Paid</h1>
                      </div>
                    </div>
                    <div className="my-auto">
                      <Trash2 size={16} />
                    </div>
                  </div>
                </section>
              </div>

              {/* Participants detail information */}
              <section className="mt-2">
                <h1>Participants</h1>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  {participants.map(({ _id, name }: splitParticipantsProps) => {
                    return (
                      <section
                        key={_id}
                        className="flex justify-between border-[0.5px] border-gray-600 rounded-xl p-2"
                      >
                        <div className="flex gap-3 ">
                          <h1 className="bg-gray-500/30 rounded-full px-2 my-auto">
                            {name.slice(0, 1).toLocaleUpperCase()}
                          </h1>
                          <h1 className="my-auto">{name}</h1>
                        </div>
                        <div className="flex gap-2">
                          <h1>${splitBill(amount, participants.length)} </h1>
                          <Check size={15} className="my-auto" />
                        </div>
                      </section>
                    );
                  })}
                </div>
              </section>
            </main>
          </article>
        );
      })}
    </div>
  );
};
