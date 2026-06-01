import type { FC, ReactElement } from "react";

export const AddSaving: FC = (): ReactElement => {
  return (
    <>
      <article className="border rounded-2xl p-4">
        <section className="w-full mb-5">
          <h2 className="my-3 font-medium">Add New Savings Goal</h2>
          <section className="flex gap-3 my-3 ">
            <div className="grid w-1/3">
              <label htmlFor="">Goal Name</label>
              <input
                className="border rounded-xl p-1 text-gray-500"
                type="text"
                placeholder="e.g New Phone"
              />
            </div>
            <div className="grid w-1/3">
              <label htmlFor="">Target Amount</label>
              <input
                className="border rounded-xl p-1 text-gray-500"
                type="number"
                placeholder="1000"
                step="0.01"
              />
            </div>
            <div className="grid ">
              <label htmlFor="">Target Date</label>
              <input
                className="pr-40 border rounded-xl px-4 py-1"
                type="date"
              />
            </div>
          </section>
        </section>
        <section className="flex gap-">
          <button className="px-3 py-1 hover:scale-[1.03] transition-transform">
            Add Goal
          </button>
          <button className="border rounded-2xl px-3 py-1"> Cancel</button>
        </section>
      </article>
    </>
  );
};
