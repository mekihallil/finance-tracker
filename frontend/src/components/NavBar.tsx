import type { FC, ReactElement } from "react";

export const NavBar: FC = (): ReactElement => {
  return (
    <>
      <section className="flex flex-col justify-between fixed top-0 bottom-0 w-1/6 mx-5 pt-12">
        <section>
          <header className="text-center text-3xl">
            <p>Finance Tracker</p>
          </header>
          <section className="text-xl pt-10">
            <div className="border rounded-3xl p-3 my-2 text-center">loren</div>
            <div className="border rounded-3xl p-3 my-2 text-center">loren</div>
            <div className="border rounded-3xl p-3 my-2 text-center">loren</div>
            <div className="border rounded-3xl p-3 my-2 text-center">loren</div>
          </section>
        </section>
        <footer className="text-center">
          <p>Finance Tracker</p>
          <p>v1.0 Premiun</p>
        </footer>
      </section>
    </>
  );
};
