import { createBrowserRouter } from "react-router";
import { App } from "./App";
import { Dashboard } from "./page/Dashborad";
import { Expense } from "./page/Expense";
import { Saving } from "./page/Saving";
import { SplitBill } from "./page/SplitBill";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "expense",
        element: <Expense />,
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
