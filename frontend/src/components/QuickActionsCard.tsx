import { Goal, Plus, Sparkles, TrendingUp, Users } from "lucide-react";
import type { FC, ReactElement } from "react";

export const QuickAction: FC = (): ReactElement => {
  return (
    <>
      <section>
        <header>
          <section className="my-8.75 mr-8 px-11 border border-gray-200 rounded-3xl shadow-2xl  dark:bg-[#182029] dark:border-[#182029] ">
            <section className="flex items-center pt-4 ">
              <Sparkles size={15} />
              <h1 className=" pl-4">
                <p className="text-[#29B866] font-bold">Quick Actions</p>
                <p className="text-[#84A3B8]">
                  Manage your finances efficiently
                </p>
              </h1>
            </section>
            {/* quick cardes */}
            <section className="grid grid-cols-4 gap-4 mt-10 mb-5">
              <button className="bg-[#15AE7B] rounded-2xl text-center p-5">
                <div>
                  <Plus size={15} className="m-auto" />
                </div>
                <p>Add Expense</p>
              </button>
              <button className="bg-[#246CFE] rounded-2xl text-center p-5">
                <div>
                  <Goal size={15} className="m-auto" />
                </div>
                <p>Set Goal</p>
              </button>
              <button className="bg-[#A840FF] rounded-2xl text-center p-5">
                <div>
                  <Users size={15} className="m-auto" />
                </div>
                <p>Split Bill</p>
              </button>
              <button className="bg-[#F8590C] rounded-2xl text-center p-5">
                <div>
                  <TrendingUp size={15} className="m-auto" />
                </div>
                <p>View Trends</p>
              </button>
            </section>
          </section>
        </header>
      </section>
    </>
  );
};
