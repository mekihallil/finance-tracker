import { TrendingDown, X } from "lucide-react";
import type { FC, ReactElement } from "react";
import { toast } from "sonner";
import { useExpense } from "../hook/userExpense.hook";
import type { IdparticalEInterface } from "../interface/expense.interface";

export const RecentExpense: FC = (): ReactElement => {
  const { getExpensesQuery, deleteExpenseMutation } = useExpense();
  const { data, isLoading, isError, error } = getExpensesQuery;

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
  const expense = data?.filter((item) => item.type === "expense");
  return (
    <article className="mb-10">
      <section className="w-full rounded-3xl shadow-2xl dark:bg-[#2C3546] my-8 mr-30  max-lg:mx-auto ">
        <h2 className="flex items-center text-gray-800 dark:text-white">
          <p className="font-bold text-xl p-6">Recent Expenses</p>
        </h2>

        {/* <ul> is the semantic tag for lists of items */}
        <ul className="space-y-2.5 px-3 pb-5">
          {expense?.map((expense: IdparticalEInterface) => (
            /* <li> represents a single list item */
            <li
              key={expense._id}
              className="border-b-2 border-gray-100 rounded-3xl p-4 hover:bg-[#fcfcfc] bg-[#FFFFFF] dark:bg-[#2C3546] dark:hover:bg-[#333C4E] dark:border-gray-800"
            >
              <div className="flex justify-between">
                <section className="flex ">
                  <div className="content-center ">
                    <section
                      className={`rounded-2xl text-xl mr-5 p-1 text-red-500 bg-red-500/15`}
                    >
                      <TrendingDown />
                    </section>
                  </div>
                  <section className="content-center">
                    <h3 className="text-[16px] font-semibold text-gray-900 dark:text-white capitalize">
                      {expense.title}
                    </h3>
                    {/* Category and Time ago */}
                    <section>
                      <span className="pb-1 pt-0.5 font-medium px-2 text-sm rounded-full bg-[#F0F3F4] dark:bg-[#4B5567]">
                        {expense.category}
                      </span>
                      <span className="font-semibold ml-3 text-center text-[14px] rounded-full text-gray-500">
                        {expense.createAt &&
                          new Date(expense.createAt).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            },
                          )}
                      </span>
                    </section>
                  </section>
                </section>

                {/* Amount */}
                <div className="flex gap-1 items-center">
                  <div className="">
                    <span
                      className={`flex justify-end text-xl font-bold text-red-500
                      `}
                    >
                      ${expense.amount.toLocaleString()}
                    </span>
                  </div>
                  <div>
                    {/* Delete Expense  */}
                    <del className="">
                      <button
                        className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                        onClick={() => {
                          toast.warning("Are you sure?", {
                            description: `${expense.category}/${expense.amount.toLocaleString()}ETB expense will be permanently deleted.`,
                            action: {
                              label: "Delete",
                              onClick: () => {
                                deleteExpenseMutation.mutate(expense._id);
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
                        <X size={18} />
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
            <p className="text-gray-400">Your expense history is empty.</p>
          </div>
        )}
      </section>
    </article>
  );
};
