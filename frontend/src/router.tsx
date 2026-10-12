import { createBrowserRouter } from "react-router";
import { App } from "./App";
import { Dashboard } from "./page/Dashborad";
import { Transaction } from "./page/Transaction";
import { Saving } from "./page/Saving";
import { SplitBill } from "./page/SplitBill";
import { LoginPage } from "./page/Login";
import { Notification } from "./page/Notification";
import { RegisterPage } from "./page/Register";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
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
      {
        path: "notification",
        element: <Notification />,
      },
    ],
  },
]);
