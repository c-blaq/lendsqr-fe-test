import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index.tsx";
import "@/styles/main.scss";
import AppLoader from "./components/ui/Loader.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<AppLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);
