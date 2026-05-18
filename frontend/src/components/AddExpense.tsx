import { zodResolver } from "@hookform/resolvers/zod";
import { DollarSign, Loader2, PlusCircle } from "lucide-react";
import { type FC, type ReactElement } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { useExpense } from "@/hook/userExpense.hook";
import {
  expenseSchema,
  type ExpenseFormData,
} from "../types/expenseSchema.type";

export const AddExpense: FC = (): ReactElement => {
  const { createExpenseMutation } = useExpense();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({
    resolver: zodResolver(expenseSchema),
    defaultValues: {
      title: "",
      type: "expense",
      category: "",
      amount: undefined,
    },
  });

  const onSubmit = (data: ExpenseFormData) => {
    createExpenseMutation.mutate(data, {
      onSuccess: () => {
        toast.success("Expense registered successfully!");
        reset();
      },
      onError: () => {
        toast.error("Failed to register expense.");
      },
    });
  };

  return (
    <section className=" max-lg:w-77 max-lg:mx-auto">
      <section
        className="p-8 border rounded-3xl shadow-sm border-gray-100 dark:border-black
       "
      >
        <header className="mb-6">
          <h1 className="flex gap-3 font-bold  tracking-tight">
            <i>
              <DollarSign />
            </i>
            <h1 >Add New Expense</h1>
          </h1>
        </header>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Title Input */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="title"
              className="text-[10px] font-bold uppercase text-gray-400  tracking-widest"
            >
              Description
            </label>
            <input
              {...register("title")}
              id="title"
              placeholder="What did you spend on?"
              className={`p-3 rounded-xl border bg-gray-50 dark:bg-gray-950 outline-none transition-all focus:ring-2 ${
                errors.title
                  ? "border-red-300 focus:ring-red-50"
                  : "border-gray-100 focus:ring-blue-50"
              }`}
            />
            {errors.title && (
              <span className="text-xs text-red-500 font-medium">
                {errors.title.message}
                {toast.error(`${errors.title.message}`)}
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Amount Input */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="amount"
                className="text-[10px] font-bold uppercase text-gray-400 dark:text-white tracking-widest"
              >
                Amount (Birr)
              </label>
              <input
                {...register("amount")}
                id="amount"
                {...register("amount", { valueAsNumber: true })}
                type="number"
                placeholder="0.00"
                className={`p-3 rounded-xl border bg-gray-50 dark:bg-gray-950 outline-none transition-all focus:ring-2 ${
                  errors.amount
                    ? "border-red-300 focus:ring-red-50"
                    : "border-gray-100 focus:ring-blue-50"
                }`}
              />
              {errors.amount && (
                <span className="text-xs text-red-500 font-medium">
                  {errors.amount.message}
                  {toast.error(`${errors.amount.message}`)}
                </span>
              )}
            </div>

            {/* Category Select */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="category"
                className="text-[10px] font-bold uppercase text-gray-400 tracking-widest"
              >
                Category
              </label>
              <section
                {...register("category")}
                id="category"
                className="p-3 rounded-xl border border-gray-100 bg-gray-50  dark:bg-gray-950 outline-none focus:ring-2 focus:ring-blue-50 font-medium text-gray-600"
              >
                <li value="Food">Food</li>
                <li value="Transport">Transport</li>
                <li value="Coffee">Coffee</li>
                <li value="Shopping">Shopping</li>
                <li value="Rent">Rent</li>
                <li value="Education">Education</li>
                <li value="Entertainment">Entertainment</li>
                <li value="Health">Health</li>
              </section>
              {errors.category && (
                <span className="text-xs text-red-500 font-medium">
                  {errors.category.message}
                  {toast.error(`${errors.category.message}`)}
                </span>
              )}
            </div>
          </div>

          {/* Type Selector (Custom Toggle Style) */}
          <div className="flex p-1 bg-gray-950 rounded-2xl border border-gray-200">
            <label className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl  cursor-pointer has-checked:bg-white dark:has-checked:bg-transparent dark:has-checked:border-2 has-checked:shadow-sm transition-all">
              <input
                {...register("type")}
                type="radio"
                value="income"
                className="sr-only"
              />
              <span className="text-sm font-bold text-gray-600 dark:text-white">
                Income
              </span>
            </label>
            <label className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl cursor-pointer has-checked:bg-white dark:has-checked:bg-transparent dark:has-checked:border-2 has-checked:shadow-2xl transition-all">
              <input
                {...register("type")}
                type="radio"
                value="expense"
                className="sr-only"
              />
              <span className="text-sm font-bold text-gray-600 dark:text-white">
                Expense
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={createExpenseMutation.isPending}
            className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white p-4 rounded-2xl font-bold hover:bg-black transition-all disabled:bg-gray-300"
          >
            {createExpenseMutation.isPending ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              <>
                <PlusCircle size={20} />
                <span>Save Expense</span>
              </>
            )}
          </button>
        </form>
      </section>
    </section>
  );
};
