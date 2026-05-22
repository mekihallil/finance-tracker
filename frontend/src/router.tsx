import { createBrowserRouter } from "react-router";
import { App } from "./App";
import { Dashboard } from "./page/Dashborad";
import { Expense } from "./page/Expense";
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
    ],
  },
]);
