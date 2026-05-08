import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Save } from "lucide-react";
import { type FC, type ReactElement } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useTransaction } from "../hook/userTransaction.hook";
import type { updateInterface } from "../interface/update.interface";
import {
  transactionSchema,
  type TransactionFormData,
} from "../types/transactionSchema.type";

export const UpdateTransaction: FC<updateInterface> = ({
  id,
  data,
}): ReactElement => {
  const { updateTransactionMutation } = useTransaction();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TransactionFormData>({
    resolver: zodResolver(transactionSchema),
    defaultValues: {
      title: data.title,
      type: data.type,
      category: data.category,
      amount: data.amount,
    },
  });

  const onSubmit = (formData: TransactionFormData) => {
    updateTransactionMutation.mutate(
      { id, data: formData },
      {
        onSuccess: () => {
          navigate("/");
        },
      },
    );
  };

  return (
    <section className="mx-auto mt-30 w-150 max-lg:w-77 max-lg:mx-auto">
      <section
        className="p-8 border rounded-3xl shadow-sm border-gray-100 dark:border-black
       "
      >
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
              placeholder="e.g. Monthly Salary"
              className={`p-3 rounded-xl border bg-gray-50 dark:bg-black outline-none transition-all focus:ring-2 ${
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
                className={`p-3 rounded-xl border bg-gray-50 dark:bg-black outline-none transition-all focus:ring-2 ${
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
                className="p-3 rounded-xl border border-gray-100 bg-gray-50  dark:bg-black outline-none focus:ring-2 focus:ring-blue-50 font-medium text-gray-600"
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
            <label className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl cursor-pointer has-checked:bg-white dark:has-checked:bg-black has-checked:shadow-sm transition-all">
              <input
                {...register("type")}
                type="radio"
                value="income"
                className="sr-only"
              />
              <span className="text-sm font-bold text-gray-600">Income</span>
            </label>
            <label className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl cursor-pointer has-checked:bg-white dark:has-checked:bg-black has-checked:shadow-sm transition-all">
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
            disabled={updateTransactionMutation.isPending}
            className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white p-4 rounded-2xl font-bold hover:bg-black transition-all disabled:bg-gray-300"
          >
            {updateTransactionMutation.isPending ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              <>
                <Save size={20} />
                <span>Update Record</span>
              </>
            )}
          </button>
          <button
            type="button"
            className="w-full text-sm text-gray-500 hover:underline"
            onClick={() => {
              navigate("/");
            }}
          >
            Cancel
          </button>
        </form>
      </section>
    </section>
  );
};
