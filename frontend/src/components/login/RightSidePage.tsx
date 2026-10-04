import { Check, Eye, LockKeyhole, Mail } from "lucide-react";
import type { FC, ReactElement } from "react";

export const RightSidePage: FC = (): ReactElement => {
  return (
    <article className="mt-8.25">
      <section>
        <div className="flex justify-end px-20.5">
          New to Vestia? <a href="">Create an account</a>
        </div>

        <section className="grid justify-center w-full my-36">
          <div className="w-112.5">
            {/* greeting  */}
            <div className="mb-9">
              <p className="text-5xl leading-tight tracking-tight">
                Welcome back
              </p>
              <p className="text-slate-500 mt-3">
                Sign in to pick up where you left off.
              </p>
            </div>
            <section className="space-y-5">
              {/* emali addres input  */}
              <div className="grid">
                <label className="text-sm font-bold mb-2" htmlFor="email">
                  Email address
                </label>
                <div className="group flex items-center rounded-xl border border-black bg-white px-4 shadow-sm transition focus-within:ring-4 focus-within:[#29B866]/10 ">
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
                  <label className="text-sm font-bold" htmlFor="password">
                    Password
                  </label>
                  <button className="text-xs font-bold text-[#29B866] transition text-ink">
                    Forgot password?
                  </button>
                </div>

                <div className="group flex items-center rounded-xl border border-black bg-white px-4 shadow-sm transition focus-within:ring-4 focus-within:[#29B866]/50 ">
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
                <span className="flex size-5 place-items-center rounded-md border transition border-[#29B866] text-white">
                  <Check size={3} color="#29B866" />
                </span>
                <input type="checkbox" className="sr-only" />
                <p>Keep me signed in</p>
              </label>
              <button className="w-full rounded-xl bg-[#29B866] py-3.5 font-bold text-white shadow-lg shadow-ink-500/15 hover:-translate-y-0.5 hover:bg-[#29B866] focus:outline-none foucs:ring-4 focus:ring-[#29B866]/20 active:translate-y-0 ">
                Sign in
              </button>
            </section>
            <div>
              <span>OR CONTINUE WITH</span>
              <div>
                <i>Icon</i>
                <button>Continue With Google</button>
              </div>
              <p>By continuing, you agree to our Terms and Privacy Policy.</p>
            </div>
          </div>
        </section>
      </section>
    </article>
  );
};
