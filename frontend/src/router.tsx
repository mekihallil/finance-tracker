import { createBrowserRouter } from "react-router";
import { App } from "./app";
import { AddExpense } from "./components/AddExpense";
import { Dashboard } from "./page/Dashborad";
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
        element: <AddExpense />,
      },
    ],
  },
]);
