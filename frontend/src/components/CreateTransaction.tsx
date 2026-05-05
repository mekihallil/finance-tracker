import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, PlusCircle } from "lucide-react";
import { type FC, type ReactElement } from "react";
import { useForm } from "react-hook-form";
import { useTransaction } from "../hook/userTransaction.hook";
import {
  transactionSchema,
  type TransactionFormData,
} from "../types/transactionSchema.type";

export const CreateTransaction: FC = (): ReactElement => {
  const { createTransactionMutation } = useTransaction();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TransactionFormData>({
    resolver: zodResolver(transactionSchema),
    defaultValues: {
      title: "",
      type: "expense",
      category: "Food",
      amount: undefined,
    },
  });

  const onSubmit = (data: TransactionFormData) => {
    createTransactionMutation.mutate(data, {
      onSuccess: () => {
        reset(); // Clear form only if database update is successful
      },
    });
  };

  return (
    <section className="w-full lg:w-1/2 mx-auto bg-white p-8 rounded-3xl border border-gray-100 shadow-sm mt-10 max-lg:w-77 max-lg:mx-auto">
      <header className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 tracking-tight">
          Add Transaction
        </h2>
        <p className="text-sm text-gray-400 font-medium">
          Record a new income or expense
        </p>
      </header>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Title Input */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="title"
            className="text-[10px] font-bold uppercase text-gray-400 tracking-widest"
          >
            Description
          </label>
          <input
            {...register("title")}
            id="title"
            placeholder="e.g. Monthly Salary"
            className={`p-3 rounded-xl border bg-gray-50 outline-none transition-all focus:ring-2 ${
              errors.title
                ? "border-red-300 focus:ring-red-50"
                : "border-gray-100 focus:ring-blue-50"
            }`}
          />
          {errors.title && (
            <span className="text-xs text-red-500 font-medium">
              {errors.title.message}
            </span>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Amount Input */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="amount"
              className="text-[10px] font-bold uppercase text-gray-400 tracking-widest"
            >
              Amount (Birr)
            </label>
            <input
              {...register("amount")}
              id="amount"
              {...register("amount", { valueAsNumber: true })}
              type="number"
              placeholder="0.00"
              className={`p-3 rounded-xl border bg-gray-50 outline-none transition-all focus:ring-2 ${
                errors.amount
                  ? "border-red-300 focus:ring-red-50"
                  : "border-gray-100 focus:ring-blue-50"
              }`}
            />
            {errors.amount && (
              <span className="text-xs text-red-500 font-medium">
                {errors.amount.message}
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
            <select
              {...register("category")}
              id="category"
              className="p-3 rounded-xl border border-gray-100 bg-gray-50 outline-none focus:ring-2 focus:ring-blue-50 font-medium text-gray-600"
            >
              <option value="Food">Food</option>
              <option value="Salary">Salary</option>
              <option value="Transport">Transport</option>
              <option value="Rent">Rent</option>
              <option value="Health">Health</option>
            </select>
          </div>
        </div>

        {/* Type Selector (Custom Toggle Style) */}
        <div className="flex p-1 bg-gray-100 rounded-2xl border border-gray-200">
          <label className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl cursor-pointer has-checked:bg-white has-checked:shadow-sm transition-all">
            <input
              {...register("type")}
              type="radio"
              value="income"
              className="sr-only"
            />
            <span className="text-sm font-bold text-gray-600">Income</span>
          </label>
          <label className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl cursor-pointer has-checked:bg-white has-checked:shadow-sm transition-all">
            <input
              {...register("type")}
              type="radio"
              value="expense"
              className="sr-only"
            />
            <span className="text-sm font-bold text-gray-600">Expense</span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={createTransactionMutation.isPending}
          className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white p-4 rounded-2xl font-bold hover:bg-black transition-all disabled:bg-gray-300"
        >
          {createTransactionMutation.isPending ? (
            <Loader2 className="animate-spin" size={20} />
          ) : (
            <>
              <PlusCircle size={20} />
              <span>Save Transaction</span>
            </>
          )}
        </button>
      </form>
    </section>
  );
};
