import { createBrowserRouter } from "react-router";
import { App } from "./App";
import { EditPage } from "./components/EditPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/edit/:id",
    element: <EditPage />,
  },
]);
