import { createBrowserRouter } from "react-router";

import { Dashboard } from "../page/Dashborad";
import { Transaction } from "../page/Transaction";
import { Saving } from "../page/Saving";
import { SplitBill } from "../page/SplitBill";
import { LoginPage } from "../page/Login";
import { Notification } from "../page/Notification";
import { RegisterPage } from "../page/Register";
import { ProtectedRouter } from "./ProtectedRouter";
import { App } from "@/App";
import { PublicRouter } from "./PublicRouter";

export const router = createBrowserRouter([
  {
    element: <PublicRouter />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    element: <ProtectedRouter />,
    children: [
      {
        path: "/",
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
          {
            path: "notification",
            element: <Notification />,
          },
        ],
      },
    ],
  },
]);
