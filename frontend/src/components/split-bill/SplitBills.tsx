import { Check, PizzaIcon, Trash2 } from "lucide-react";
import { type FC, type ReactElement } from "react";

export const SplitBills: FC = (): ReactElement => {
  return (
    <article className="bg-[#2C3546] rounded-3xl p-7 mt-8">
      <div className="flex justify-between">
        <section className="flex gap-4">
          <div>
            <PizzaIcon size={20} />
          </div>
          <div>
            <p className="text-[17px] font-semibold">
              Dinner at Italian Restaurant
            </p>
            <p className="text-[14px] text-gray-400 font-medium">
              Created by You on dd-mm-yyyy
            </p>
            <div className="flex gap-2 mt-1">
              <h2 className="font-semibold text-[12px] capitalize bg-gray-400/25 rounded-2xl my-auto py-0.5 px-2">
                2 Pending
              </h2>
              <h2>Total: $120.50</h2>
            </div>
          </div>
        </section>
        <section>
          <div className="flex gap-5 mr-5 ">
            <div>
              <h1 className="text-[18px] font-semibold">Your share: $30.13</h1>
              <div className="flex gap-2">
                <Check size={18} className="my-auto" />
                <h1>Paid</h1>
              </div>
            </div>
            <div className="my-auto">
              <Trash2 size={16} />
            </div>
          </div>
        </section>
      </div>

      {/* Participants detail information */}
      <section className="mt-2">
        <h1>Participants</h1>
        <div className="grid grid-cols-2 gap-2 mt-1">
          <section className="flex justify-between border-[0.5px] border-gray-600 rounded-xl p-2">
            <div className="flex gap-3 ">
              <h1 className="bg-gray-500 rounded-full px-2 my-auto">Y</h1>
              <h1 className="my-auto">You</h1>
            </div>
            <div className="flex gap-2">
              <h1>$30.13</h1>
              <Check size={15} className="my-auto" />
            </div>
          </section>
        </div>
      </section>
    </article>
  );
};
