import { Plus, Sparkles } from "lucide-react";
import { Link } from "react-router";

export const FinancialDashbaord = () => {
  return (
    <>
      <article>
        <section className="lg:justify-between place-items-center my-8.75 px-11 py-8 border-gray-200 rounded-4xl dark:bg-[#182029] lg:h-31.25 md:flex grid gap-5">
          <section className="flex items-center ">
            <Sparkles className="size-10" />
            <h1 className=" pl-6">
              <p className="text-3xl text-[#29B866] font-bold">
                Financial Dashboard
              </p>
              <p className="text-[#84A3B8] text-[18px]">
                Track your spending and reach your goals with insights
              </p>
            </h1>
          </section>

          <div className="flex lg:items-center">
            <Plus size={15} />
            <Link to={"/transaction"} className="pl-2 ">
              Add Transactions
            </Link>
          </div>
        </section>
      </article>
    </>
  );
};
