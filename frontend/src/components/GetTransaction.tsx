import { timeAgo } from "@/context/data";
import {
  DollarSign,
  PencilLine,
  Trash2,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import type { FC, ReactElement } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { useTransaction } from "../hook/userTransaction.hook";
import type { IdparticalTInterface } from "../interface/transaction.interface";

export const GetTransactions: FC = (): ReactElement => {
  const { getTransactionsQuery, deleteTransactionMutation } = useTransaction();
  const { data, isLoading, isError, error } = getTransactionsQuery;
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="flex justify-center p-10">
        <span className="text-gray-400 animate-pulse">Loading activity...</span>
      </div>
    );
  }

  if (isError) {
    return (
      <div
        role="alert"
        className="p-4 text-red-500 bg-red-50 rounded-xl border border-red-100"
      >
        <p className="font-bold">Fetch Error:</p>
        <p className="text-sm">{error.message}</p>
      </div>
    );
  }

  return (
    <article className="mr-8">
      <section className="w-full rounded-3xl shadow-2xl dark:bg-[#182029] my-8 mr-30 p-10 max-lg:mx-auto ">
        <h2 className="flex items-center text-gray-800 pb-8 dark:text-white">
          <div className="mr-5 ">
            <DollarSign />
          </div>
          <div>
            <p className="text-[#29B866] font-bold">Recent Activity</p>
            <p className="text-[#84A3B8]">Your latest transactions</p>
          </div>
        </h2>

        {/* <ul> is the semantic tag for lists of items */}
        <ul className="space-y-1.5">
          {data?.map((transaction: IdparticalTInterface) => (
            /* <li> represents a single list item */
            <li
              key={transaction._id}
              className="border border-gray-100 rounded-3xl px-5 py-3 hover:border-black dark:hover:border-white  dark:border-gray-800"
            >
              <div className="flex justify-between">
                <section className="flex ">
                  <div className="content-center ">
                    <section
                      className={`rounded-2xl text-xl mr-5 p-1 ${
                        transaction.type === "income"
                          ? "text-green-600 bg-green-600/15"
                          : "text-red-500 bg-red-500/15"
                      }`}
                    >
                      {transaction.type === "income" ? (
                        <TrendingUp />
                      ) : (
                        <TrendingDown />
                      )}
                    </section>
                  </div>
                  <section className="content-center">
                    <h3 className="text-[16px] font-semibold text-gray-900 dark:text-white capitalize">
                      {transaction.title}
                    </h3>
                    {/* Category and Time ago */}
                    <section>
                      <span className="font-medium mt-1 px-1.5 text-[14px] rounded-full bg-[#F0F3F4] dark:bg-[#4B5567]  bg-">
                        {transaction.category}
                      </span>
                      <span className="font-semibold ml-3 text-center text-[13px] rounded-full text-gray-500">
                        {transaction.createAt && timeAgo(transaction.createAt)}
                      </span>
                    </section>
                  </section>
                </section>

                {/* Amount */}
                <div className="flex gap-1 items-center">
                  <div className="">
                    <span
                      className={`flex justify-end text-xl font-bold ${
                        transaction.type === "income"
                          ? "text-green-600"
                          : "text-red-500"
                      }`}
                    >
                      {transaction.type === "income" ? "+" : ""}$
                      {transaction.amount.toLocaleString()}
                    </span>
                  </div>
                  <div>
                    {/* edit Transaction  */}
                    <div className="">
                      <button
                        className="cursor-pointer px-3 py-1 rounded"
                        onClick={() => navigate(`/edit/${transaction._id}`)}
                      >
                        <PencilLine size={18} />
                      </button>
                    </div>

                    {/* Delete Transaction  */}
                    <del className="">
                      <button
                        className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                        onClick={() => {
                          toast.warning("Are you sure?", {
                            description: `${transaction.category}/${transaction.amount.toLocaleString()}ETB transaction will be permanently deleted.`,
                            action: {
                              label: "Delete",
                              onClick: () => {
                                deleteTransactionMutation.mutate(
                                  transaction._id,
                                );
                              },
                            },
                            cancel: {
                              label: "Cancel",
                              onClick: () => console.log("Cancel"),
                            },
                            duration: 10000,
                          });
                        }}
                      >
                        <Trash2 color="red" size={18} />
                      </button>
                    </del>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Empty State */}
        {data?.length === 0 && (
          <div className="text-center py-20 border-2 border-dashed border-gray-200 rounded-3xl">
            <p className="text-gray-400">Your transaction history is empty.</p>
          </div>
        )}
      </section>
    </article>
  );
};
