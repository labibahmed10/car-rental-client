import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/routers.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store/store.ts";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <Toaster duration={2500} position="top-center" richColors />
    </Provider>
  </StrictMode>
);
