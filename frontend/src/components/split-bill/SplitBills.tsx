import { useSplit } from "@/hook/userSplit.hook";
import type {
  participantsEnumFormData,
  splitFormData,
} from "@/types/splitSchema.types";
import {
  CarTaxiFront,
  Check,
  Clock,
  House,
  MoreHorizontal,
  PizzaIcon,
  Plane,
  Trash2,
  Zap,
} from "lucide-react";
import {
  useEffect,
  useState,
  type FC,
  type ReactElement,
  type ReactNode,
} from "react";
import { toast } from "sonner";

interface splitBillDoc extends splitFormData {
  _id: string;
  createdAt: Date;
}

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

export const SplitBills: FC = (): ReactElement | null => {
  const { getSplitQuery, DeleteSplitMutation } = useSplit();
  const split = getSplitQuery;
  const { data, isError, error, isLoading } = split;

  useEffect(() => {
    if (error) {
      toast.error(error.message);
    }
  }, [isError, error]);

  const [IsHovered, setIsHovered] = useState<string | null>(null);
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
  if (!data) return null;
  const { splitBills } = data;

  const splitBill = (amount: number, participants: number) => {
    return (amount / participants).toFixed(2);
  };
  return (
    <div>
      {splitBills.map(
        ({
          _id,
          title,
          category,
          amount,
          participants,
          createdAt,
        }: splitBillDoc) => {
          const CategoryIcon = categoryIcon.find(
            (c) => c.categoryId === category,
          )?.icon;

          const UnpaidLength = participants.filter(
            (p: participantsEnumFormData) => !p.paid,
          ).length;
          return (
            <article
              key={_id}
              onMouseEnter={() => setIsHovered(_id)}
              onMouseLeave={() => setIsHovered(null)}
              className="border border-gray-300 rounded-3xl p-7 mt-8 shadow-2xl dark:bg-[#2C3546]"
            >
              <main>
                <div className="flex justify-between">
                  <section className="flex gap-2 md:gap-4">
                    <div>{CategoryIcon}</div>
                    <div>
                      <p className="text-[17px] font-semibold">{title}</p>
                      <p className="text-[14px] text-gray-400 font-medium">
                        Created by You on
                        {new Date(createdAt)?.toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                      <div className="grid md:flex justify-center gap-2 mt-1">
                        <h2 className="font-semibold text-[12px] capitalize bg-gray-400/25 rounded-2xl my-auto py-0.5 px-2">
                          {UnpaidLength} Pending
                        </h2>
                        <h2>Total: ${amount}</h2>
                      </div>
                    </div>
                  </section>
                  <section>
                    <div className="flex md:gap-5 md:mr-5 ">
                      <div>
                        <h1 className="text-[18px] font-semibold">
                          Your share: ${splitBill(amount, participants.length)}
                        </h1>
                        <div className="flex gap-2">
                          <Check size={18} className="my-auto" />
                          <h1>Paid</h1>
                        </div>
                      </div>
                      <div>
                        <button
                          onClick={() => DeleteSplitMutation.mutate(_id)}
                          className="my-auto md:hidden"
                        >
                          <Trash2 className="text-red-500" size={20} />
                        </button>
                        {IsHovered === _id ? (
                          <button
                            onClick={() => DeleteSplitMutation.mutate(_id)}
                            className="my-auto"
                          >
                            <Trash2 className="text-red-500" size={20} />
                          </button>
                        ) : (
                          <div className="md:mr-5"></div>
                        )}
                      </div>
                    </div>
                  </section>
                </div>

                {/* Participants detail information */}
                <section className="mt-2">
                  <h1>Participants</h1>
                  <div className="grid gap-2 mt-1 md:grid-cols-2">
                    {participants.map(
                      ({ _id, name, paid }: participantsEnumFormData) => {
                        return (
                          <section
                            key={_id}
                            className="flex justify-between border-[0.5px] border-gray-600 rounded-xl p-2"
                          >
                            <div className="flex gap-3 ">
                              <h1 className="bg-gray-500/30 rounded-full px-2 my-auto">
                                {name.slice(0, 1).toLocaleUpperCase()}
                              </h1>
                              <h1 className="my-auto capitalize">{name}</h1>
                            </div>
                            <div className="flex gap-2">
                              <h1>${splitBill(amount, participants.length)}</h1>
                              {paid == true ? (
                                <Check size={15} className="my-auto " />
                              ) : (
                                <Clock
                                  size={15}
                                  color="#FE9A00"
                                  className="my-auto"
                                />
                              )}
                            </div>
                          </section>
                        );
                      },
                    )}
                  </div>
                </section>
              </main>
            </article>
          );
        },
      )}
    </div>
  );
};
