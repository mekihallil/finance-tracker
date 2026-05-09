import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme";
import "./index.css";
import { router } from "./router";

const queryClient = new QueryClient();
const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

createRoot(document.getElementById("root")!).render(
  <ThemeProvider storageKey="vite-hi-theme">
    <Toaster
      theme={isDark ? "dark" : "light"}
      position="top-center"
      richColors
    />
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </ThemeProvider>,
);
