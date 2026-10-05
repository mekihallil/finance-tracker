import { Check, Eye, LockKeyhole, Mail } from "lucide-react";
import type { FC, ReactElement } from "react";
import { FcGoogle } from "react-icons/fc";

export const RightSidePage: FC = (): ReactElement => {
  return (
    <article className="bg-white pt-12">
      <section>
        <div className="flex justify-end px-20.5 text-gray-900">
          New to Vestia?
          <button className="font-bold text-gray-700 underline underline-offset-4 decoration-2 decoration-emerald-400 transition hover:text-gray-400 px-2">
            Create an account
          </button>
        </div>

        <section className="grid justify-center w-full py-36">
          <div className="w-112.5">
            {/* greeting  */}
            <div className="mb-9">
              <p className="text-5xl leading-tight tracking-tight text-gray-900 font-display">
                Welcome back
              </p>
              <p className="text-slate-500 mt-3">
                Sign in to pick up where you left off.
              </p>
            </div>
            <section className="space-y-5">
              {/* emali addres input  */}
              <div className="grid">
                <label
                  className="text-sm font-bold text-gray-900 mb-2"
                  htmlFor="email"
                >
                  Email address
                </label>
                <div className="group flex items-center rounded-xl border border-gray-900 bg-white px-4 shadow-sm transition focus-within:ring-4 focus-within:[#29B866]/10 ">
                  <span className="text-gray-500 transition group-focus-within:text-[#29B866]/50 my-auto">
                    <Mail size={18} />
                  </span>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="outline-none focus:outline-none w-full px-3 py-3.5 text-sm bg-transparent text-gray-600"
                  />
                </div>
              </div>
              {/* password input  */}
              <div>
                <div className="flex justify-between items-center text-sm font-bold mb-2">
                  <label
                    className="text-sm font-bold text-gray-900"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <button className="text-xs font-bold text-[#29B866] transition text-ink">
                    Forgot password?
                  </button>
                </div>

                <div className="group flex items-center rounded-xl border border-gray-900 bg-white px-4 shadow-sm transition focus-within:ring-4 focus-within:[#29B866]/50 ">
                  <span className="text-gray-500 transition group-focus-within:text-[#29B866]/50 my-auto">
                    <LockKeyhole size={18} />
                  </span>
                  <input
                    type="text"
                    placeholder="Enter your password"
                    className="outline-none focus:outline-none w-full px-3 py-3.5 text-sm bg-transparent text-gray-600"
                  />
                  <span className="text-muted transition group-focus-within:text-[#29B866]/50 my-auto">
                    <Eye size={18} />
                  </span>
                </div>
              </div>
              <label className="flex w-fit cursor-pointer items-center text-sm text-[#29B866] gap-3">
                <span className="grid size-5 place-items-center bg-[#29B866] rounded-md border transition border-[#29B866] text-white">
                  <Check size={16} color="white" className="bg-[#29B866]" />
                </span>
                <input type="checkbox" className="sr-only" />
                <p>Keep me signed in</p>
              </label>
              <button className="w-full rounded-xl bg-[#29B866] py-3.5 font-bold text-white shadow-lg shadow-ink-500/15 hover:-translate-y-0.5 hover:bg-[#29B866] focus:outline-none foucs:ring-4 focus:ring-[#29B866]/20 active:translate-y-0 ">
                Sign in
              </button>
            </section>
            <div>
              <span className="flex items-center my-7 gap-4">
                <span className="h-px flex-1 bg-gray-500"></span>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                  or continue with
                </p>
                <span className="h-px flex-1 bg-gray-500"></span>
              </span>
              <div className="flex justify-center items-center gap-3 rounded-xl border border-gray-400 bg-white py-3.5 text-sm text-gray-900 font-bold shadow-sm transition hover:-translate-y-0.5 hover:border-gray-500 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-gray-400/10">
                <span>
                  <FcGoogle size={24} />
                </span>
                <button>Continue With Google</button>
              </div>
              <p className="text-center text-xs leading-relaxed mt-8 text-gray-500">
                By continuing, you agree to our
                <button className="underline underline-offset-2 px-1">
                  Terms
                </button>
                and
                <button className="underline underline-offset-2 px-1">
                  Privacy Policy
                </button>
                .
              </p>
            </div>
          </div>
        </section>
      </section>
    </article>
  );
};
