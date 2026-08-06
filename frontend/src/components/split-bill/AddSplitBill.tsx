import { Plus } from "lucide-react";
import { type FC, type ReactElement } from "react";

export const AddSplitBill: FC = (): ReactElement => {
  return (
    <article className="bg-[#2C3546] rounded-3xl p-7 mt-8">
      <h1 className="mb-8">Create New Split</h1>
      <div className="grid gap-6.5">
        <div className="grid">
          <label htmlFor="">What's this for?</label>
          <div className="grid grid-cols-2 gap-3">
            <input
              className="bg-[#283243] p-2 rounded-2xl border border-[#202B3D]"
              type="text"
              placeholder="e.g., Dinner at Pizza Place"
            />
            <input
              className="bg-[#283243] p-2 rounded-2xl border border-[#202B3D]"
              type="number"
              placeholder="0.00"
            />
          </div>
        </div>
        <div>
          <label htmlFor="">Participants</label>
          <div>
            <section className="border rounded-2xl mb-3 mt-1">
              <div className="flex gap-3 p-2.5">
                <h1 className="border rounded-full px-3 py-1 my-auto">Y</h1>
                <div>
                  <h1>You</h1>
                  <h1>you@gmail.com</h1>
                </div>
              </div>
            </section>
          </div>
          <div className=" grid grid-cols-12 gap-4">
            <input
              className="col-start-1 col-end-7 bg-[#283243] p-2 rounded-2xl border border-[#202B3D]"
              type="text"
              placeholder="Name"
            />
            <input
              className="col-start-7 col-end-12 bg-[#283243] p-2 rounded-2xl border border-[#202B3D]"
              type="text"
              placeholder="Email"
            />

            <button className="grid place-content-center border rounded-xl bg-[#283243] mx-2"> <Plus size={20}/> </button>
          </div>
        </div>
      </div>
      <div className="flex gap-6 ml-5 mt-5">
        <button>Create Split</button>
        <button className="border py-1 px-4 rounded-xl">Cancel</button>
      </div>
    </article>
  );
};
