import { createBrowserRouter } from "react-router";
import { Dashboard } from "./page/Dashborad";
import { Expense } from "./page/Expense";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/expense",
    element: <Expense />,
  },
]);
