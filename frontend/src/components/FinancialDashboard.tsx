import { Plus, Sparkles } from "lucide-react";

export const FinancialDashbord = () => {
  return (
    <>
      <article>
        <section className="flex justify-between place-items-center  h-31.25 my-8.75 mr-8 px-11  border-gray-200 rounded-4xl dark:bg-[#182029] ">
          <section className="flex  items-center ">
            <Sparkles />
            <h1 className=" pl-6">
              <p className="text-3xl text-[#29B866] font-bold">
                Financial Dashboard
              </p>
              <p className="text-[#84A3B8] text-[18px]">
                Track your spending and reach your goals with insights
              </p>
            </h1>
          </section>

          <div className="flex items-center">
            <Plus size={15} />
            <p className="pl-2">Add Expenses</p>
          </div>
        </section>
      </article>
    </>
  );
};
