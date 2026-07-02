import { zodResolver } from "@hookform/resolvers/zod";
import {
  CarTaxiFront,
  Coffee,
  DollarSign,
  Gamepad2,
  GraduationCap,
  Heart,
  House,
  Loader2,
  PlusCircle,
  ShoppingBag,
  Utensils,
} from "lucide-react";
import { type FC, type ReactElement } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { useExpense } from "@/hook/userExpense.hook";
import {
  expenseSchema,
  type ExpenseFormData,
} from "@/types/expenseSchema.type";

type Category = {
  id: number;
  icons: ReactElement;
  categoryName: string;
};
const categoryData: Category[] = [
  { id: 1, icons: <Utensils />, categoryName: "Food" },
  { id: 2, icons: <CarTaxiFront />, categoryName: "Transport" },
  { id: 3, icons: <Coffee />, categoryName: "Coffee" },
  { id: 4, icons: <ShoppingBag />, categoryName: "Shopping" },
  { id: 5, icons: <House />, categoryName: "Rent" },
  { id: 6, icons: <GraduationCap />, categoryName: "Education" },
  { id: 7, icons: <Gamepad2 />, categoryName: "Entertainment" },
  { id: 8, icons: <Heart />, categoryName: "Health" },
];

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
      <section className="p-8 rounded-3xl shadow-sm border-gray-100 dark:bg-[#2C3546] dark:border-black">
        <header className="mb-6">
          <div className="flex gap-3 font-bold  tracking-tight">
            <i>
              <DollarSign />
            </i>
            <h1>Add New Expense</h1>
          </div>
        </header>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <section className="flex space-x-10">
            <div className="w-1/2 space-y-10">
              {/* Amount Input */}
              <div className="flex flex-col">
                <label
                  htmlFor="amount"
                  className="text-[14px] font-bold text-gray-400"
                >
                  Amount ($)
                </label>
                <input
                  id="amount"
                  {...register("amount", { valueAsNumber: true })}
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  className={` p-2 rounded-2xl  bg-gray-50 outline-none dark:bg-[#283243]  transition-all focus:ring-2 ${
                    errors.amount
                      ? "border-red-300 focus:ring-red-50"
                      : "border-gray-100 focus:ring-blue-50"
                  }`}
                />
                {errors.amount && (
                  <span className="text-xs text-red-500 font-medium">
                    {errors.amount.message}
                    {/* {toast.error(`${errors.amount.message}`)} */}
                  </span>
                )}
              </div>
              {/* Title Input */}
              <div className="flex flex-col">
                <label
                  htmlFor="title"
                  className="text-[14px] font-bold text-gray-400"
                >
                  Description
                </label>
                <input
                  {...register("title")}
                  id="title"
                  placeholder="What did you spend on?"
                  className={`text-sm p-2 rounded-xl  bg-gray-50 dark:bg-[#283243] outline-none transition-all focus:ring-2 ${
                    errors.title
                      ? "border-red-300 focus:ring-red-50"
                      : "border-gray-100 focus:ring-blue-50"
                  }`}
                />
                {errors.title && (
                  <span className="text-xs text-red-500 font-medium">
                    {errors.title.message}
                    {/* {toast.error(`${errors.title.message}`)} */}
                  </span>
                )}
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                disabled={createExpenseMutation.isPending}
                className="w-full flex items-center justify-center gap-2 p-4 rounded-2xl font-bold dark:bg-[#131c2a] bg-[#c1c1c1] hover:scale-95 transition-all disabled:bg-gray-300"
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
            </div>
            {/* Category Select */}
            <div className="flex w-1/2">
              <section className="w-full">
                <label
                  htmlFor="category"
                  className="text-[14px] font-bold text-gray-400"
                >
                  Category
                </label>

                <div className="grid grid-cols-2 gap-2">
                  {categoryData.map((c) => {
                    return (
                      <label
                        key={c.id}
                        className=" p-3 rounded-xl  cursor-pointer has-checked:bg-white dark:bg-[#131c2a] bg-[#c1c1c1] hover:rounded-3xl dark:has-checked:bg-transparent  transition-all"
                      >
                        <input
                          {...register("category")}
                          type="radio"
                          value={c.categoryName}
                          className="sr-only"
                        />
                        <div className="flex flex-col justify-center text-center">
                          <i className="mx-auto">{c.icons}</i>
                          <span className="font-semibold text-[13px] text-gray-600 dark:text-white">
                            {c.categoryName}
                          </span>
                        </div>
                      </label>
                    );
                  })}
                </div>
                {errors.category && (
                  <span className="text-xs text-red-500 font-medium">
                    {errors.category.message}
                    {/* {toast.error(`${errors.category.message}`)} */}
                  </span>
                )}
              </section>
            </div>
          </section>
        </form>
      </section>
    </section>
  );
};
