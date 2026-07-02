import { useSaving } from "@/hook/userSaving.hook";
import { savingSchema, type SavingFormData } from "@/types/savingSchema.tyes";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, PlusCircle } from "lucide-react";
import type { FC, ReactElement } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface AddSavinglProps {
  isOpen: boolean;
}
export const AddSaving: FC<AddSavinglProps> = ({ isOpen }): ReactElement => {
  const { createSavingMutation } = useSaving();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SavingFormData>({
    resolver: zodResolver(savingSchema),
  });

  const onSubmit = (data: SavingFormData) => {
    createSavingMutation.mutate(data, {
      onSuccess: () => {
        toast.success("Saving registered successfully!");
        reset();
      },
      onError: () => {
        toast.error("Failed to register Saving.");
      },
    });
  };

  if (!isOpen) return <></>;

  return (
    <article className="rounded-2xl dark:bg-[#2C3546] border border-gray-300  dark:border-none p-5 mb-7">
      <section className="w-full mb-5">
        <h2 className="mb-5 font-medium ">Add New Savings Goal</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <section className="grid grid-cols-4 gap-3 my-3 ">
            <div className="grid">
              <label htmlFor="name">Goal Name</label>
              <input
                id="name"
                maxLength={100}
                {...register("name")}
                className=" rounded-xl p-1 dark:border dark:border-[#202B3D] dark:bg-[#283243] text-gray-300"
                type="text"
                placeholder="e.g New Phone"
              />
              {errors.name && (
                <span className="text-xs text-red-500 font-medium">
                  {errors.name.message}
                  {toast.error(`${errors.name.message}`)}
                </span>
              )}
            </div>
            <div className="grid">
              <label htmlFor="amount">Target Amount</label>
              <input
                id="amount"
                min={0}
                maxLength={999_999_999}
                {...register("goal", { valueAsNumber: true })}
                className=" rounded-xl p-1 dark:border dark:border-[#202B3D] dark:bg-[#283243] text-gray-300"
                type="number"
                placeholder="1000"
                step="0.01"
              />
              {errors.goal && (
                <span className="text-xs text-red-500 font-medium">
                  {errors.goal.message}
                  {toast.error(`${errors.goal.message}`)}
                </span>
              )}
            </div>
            <div className="grid">
              <label htmlFor="Category">Category</label>
              <input
                id="category"
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
                id="date"
                {...register("date", { valueAsDate: true })}
                className="rounded-xl dark:border dark:border-[#202B3D] dark:bg-[#283243] text-gray-300 py-1"
                type="date"
              />
              {errors.date && (
                <span className="text-xs text-red-500 font-medium">
                  {errors.date.message}
                  {toast.error(`${errors.date.message}`)}
                </span>
              )}
            </div>
          </section>
          <section className="flex gap-3">
            <button
              type="submit"
              disabled={createSavingMutation.isPending}
              className="flex gap-2 px-3 py-1 hover:scale-[1.03] transition-transform"
            >
              {createSavingMutation.isPending ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <div className="flex gap-1 mt-auto">
                  <PlusCircle size={20} className="mt-0.5" />
                  <span>Add Goal</span>
                </div>
              )}
            </button>
            <button className="border rounded-2xl px-3 py-1">Cancel</button>
          </section>
        </form>
      </section>
    </article>
  );
};
