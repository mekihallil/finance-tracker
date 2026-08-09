import { Plus } from "lucide-react";
import { type FC, type ReactElement } from "react";
interface addSplitBillProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddSplitBill: FC<addSplitBillProps> = ({
  isOpen,
  onClose,
}): ReactElement => {
  if (!isOpen) return <></>;
  return (
    <article className="bg-[#2C3546] rounded-3xl p-7 mt-8">
      <h1 className="mb-8">Create New Split</h1>
      <div className="grid gap-6.5">
        <div className="grid">
          <div className="grid grid-cols-3 gap-3">
            <div className="grid ">
              <label htmlFor="" className="p-1">
                What's this for?
              </label>
              <input
                className="bg-[#283243] p-2 rounded-2xl border border-[#202B3D]"
                type="text"
                placeholder="e.g., Dinner at Pizza Place"
              />
            </div>
            <div className="grid">
              <label htmlFor="" className="p-1">
                Amount
              </label>
              <input
                className="bg-[#283243] p-2 rounded-2xl border border-[#202B3D]"
                type="number"
                placeholder="0.00"
              />
            </div>
            <div className="grid">
              <label htmlFor="" className="p-1">
                Category
              </label>
              <select
                name="category"
                className="rounded-2xl border border-[#202B3D] p-2"
              >
                <option value="Taxi" className="bg-[#283243] p-2">
                  Taxi
                </option>
                <option value="Food" className="bg-[#283243] p-2">
                  Food
                </option>
                <option value="Travel" className="bg-[#283243] p-2">
                  Travel
                </option>
                <option value="Rent" className="bg-[#283243] p-2">
                  Rent
                </option>
                <option value="Other" className="bg-[#283243] p-2">
                  Other
                </option>
              </select>
            </div>
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

            <button className="grid place-content-center border rounded-xl bg-[#283243] mx-2">
              <Plus size={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-6 ml-5 mt-5">
        <button>Create Split</button>
        <button className="border py-1 px-4 rounded-xl" onClick={onClose}>
          Cancel
        </button>
      </div>
    </article>
  );
};
