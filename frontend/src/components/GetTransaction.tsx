import { Trash2 } from "lucide-react";
import type { FC, ReactElement } from "react";
import { useTransaction } from "../hook/userTransaction.hook";
import type { IdparticalTInterface } from "../interface/transaction.interface";

export const GetTransactions: FC = (): ReactElement => {
  const { getTransactionsQuery, deleteTransactionMutation } = useTransaction();
  const { data, isLoading, isError, error } = getTransactionsQuery;

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
    <section className="w-150  mx-auto pb-20 max-lg:w-77 max-lg:mx-auto">
      <h2 className="py-8 text-center text-2xl font-bold text-gray-800 dark:text-white">
        Recent Activity
      </h2>

      {/* <ul> is the semantic tag for lists of items */}
      <ul className="space-y-4">
        {data?.map((transaction: IdparticalTInterface) => (
          /* <li> represents a single list item */
          <li
            key={transaction._id}
            className="border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-gray-200 "
          >
            <div className="flex justify-between items-start">
              <header>
                <h3 className="text-xl text-gray-900 dark:text-white capitalize">
                  {transaction.title}
                </h3>
                <span className="mt-1 px-2 py-1 text-[10px] text-gray-500 rounded-md">
                  {transaction.category}
                </span>
              </header>

              {/* Amount */}
              <div className="flex gap-1">
                <div className="">
                  <span
                    className={`flex justify-end text-xl ${
                      transaction.type === "income"
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {transaction.type === "income" ? "+" : "-"}
                    {transaction.amount.toLocaleString()}
                  </span>

                  {/* <time> provides machine-readable date info */}
                  <time className="text-[10px] font-medium ">
                    {transaction.createAt &&
                      new Date(transaction.createAt).toLocaleString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                        weekday: "short",
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                      })}
                  </time>
                </div>
                <del className="place-content-center ml-1">
                  <button
                    onClick={() =>
                      deleteTransactionMutation.mutate(transaction._id)
                    }
                  >
                    <Trash2 size={18} color="red" />
                  </button>
                </del>
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
  );
};
