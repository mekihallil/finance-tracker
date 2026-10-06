import { createBrowserRouter } from "react-router";
import { App } from "./App";
import { Dashboard } from "./page/Dashborad";
import { Transaction } from "./page/Transaction";
import { Saving } from "./page/Saving";
import { SplitBill } from "./page/SplitBill";
import { Auth } from "./page/Auth";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },
  // Protected application
  {
    path: "/app",
    element: <App />,

    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "transaction",
        element: <Transaction />,
      },
      {
        path: "saving",
        element: <Saving />,
      },
      {
        path: "split-bill",
        element: <SplitBill />,
      },
    ],
  },
]);
