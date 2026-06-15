import type { FC, ReactElement } from "react";

export const AddSaving: FC = (): ReactElement => {
  return (
    <>
      <article className=" rounded-2xl dark:bg-[#2C3546] border border-gray-300  dark:border-none p-5 mb-7">
        <section className="w-full mb-5">
          <h2 className="mb-5 font-medium ">Add New Savings Goal</h2>
          <section className="flex gap-3 my-3 ">
            <div className="grid w-1/3">
              <label htmlFor="">Goal Name</label>
              <input
                className=" rounded-xl p-1 dark:border dark:border-[#202B3D] dark:bg-[#283243] text-gray-300"
                type="text"
                placeholder="e.g New Phone"
              />
            </div>
            <div className="grid w-1/3">
              <label htmlFor="">Target Amount</label>
              <input
                className=" rounded-xl p-1 dark:border dark:border-[#202B3D] dark:bg-[#283243] text-gray-300"
                type="number"
                placeholder="1000"
                step="0.01"
              />
            </div>
            <div className="grid ">
              <label htmlFor="">Target Date</label>
              <input
                className="pr-40  rounded-xl p-1 dark:border dark:border-[#202B3D] dark:bg-[#283243] text-gray-300 px-4 py-1"
                type="date"
              />
            </div>
          </section>
        </section>
        <section className="flex gap-3">
          <button className="px-3 py-1 hover:scale-[1.03] transition-transform">
            Add Goal
          </button>
          <button className="border rounded-2xl px-3 py-1"> Cancel</button>
        </section>
      </article>
    </>
  );
};
