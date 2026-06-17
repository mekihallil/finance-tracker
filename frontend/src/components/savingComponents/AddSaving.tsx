import { useSaving } from "@/hook/userSaving.hook";
import { savingSchema, type SavingFormData } from "@/types/savingSchema.tyes";
import { zodResolver } from "@hookform/resolvers/zod";
import type { FC, ReactElement } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router";
import { toast } from "sonner";
export const AddSaving: FC = (): ReactElement => {
  const { createSaving } = useSaving();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SavingFormData>({
    resolver: zodResolver(savingSchema),
  });

  const onSubmit = (data: SavingFormData) => {
    createSaving.mutate(data, {
      onSuccess: () => {
        toast.success("Saving registered successfully!");
        reset();
      },
      onError: () => {
        toast.error("Failed to register expense.");
      },
    });
  };
const path = useLocation().pathname;
  console.log(path);
  return (
    <article className=" rounded-2xl dark:bg-[#2C3546] border border-gray-300  dark:border-none p-5 mb-7">
      <section className="w-full mb-5">
        <h2 className="mb-5 font-medium ">Add New Savings Goal</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <section className="grid grid-cols-4 gap-3 my-3 ">
            <div className="grid">
              <label htmlFor="tilte">Goal Name</label>
              <input
                {...register("title")}
                className=" rounded-xl p-1 dark:border dark:border-[#202B3D] dark:bg-[#283243] text-gray-300"
                type="text"
                placeholder="e.g New Phone"
              />
              {errors.title && (
                <span className="text-xs text-red-500 font-medium">
                  {errors.title.message}
                  {toast.error(`${errors.title.message}`)}
                </span>
              )}
            </div>
            <div className="grid">
              <label htmlFor="amount">Target Amount</label>
              <input
                id="amount"
                {...register("amount", { valueAsNumber: true })}
                className=" rounded-xl p-1 dark:border dark:border-[#202B3D] dark:bg-[#283243] text-gray-300"
                type="number"
                placeholder="1000"
                step="0.01"
              />
              {errors.amount && (
                <span className="text-xs text-red-500 font-medium">
                  {errors.amount.message}
                  {toast.error(`${errors.amount.message}`)}
                </span>
              )}
            </div>
            <div className="grid">
              <label htmlFor="">Category</label>
              <input
                {...register("category")}
                className=" rounded-xl p-1 dark:border dark:border-[#202B3D] dark:bg-[#283243] text-gray-300"
                type="text"
                placeholder="laptop"
              />
              {errors.category && (
                <span className="text-xs text-red-500 font-medium">
                  {errors.category.message}
                  {toast.error(`${errors.category.message}`)}
                </span>
              )}
            </div>
            <div className="grid ">
              <label htmlFor="">Target Date</label>
              <input
                {...register("targetDate", { valueAsDate: true })}
                className="rounded-xl dark:border dark:border-[#202B3D] dark:bg-[#283243] text-gray-300 py-1"
                type="date"
              />
              {errors.targetDate && (
                <span className="text-xs text-red-500 font-medium">
                  {errors.targetDate.message}
                  {toast.error(`${errors.targetDate.message}`)}
                </span>
              )}
            </div>
          </section>
          <section className="flex gap-3">
            <button
              type="submit"
              disabled={createSaving.isPending}
              className="px-3 py-1 hover:scale-[1.03] transition-transform"
            >
              Add Goal
            </button>
            <button className="border rounded-2xl px-3 py-1">Cancel</button>
          </section>
        </form>
      </section>
    </article>
  );
};
