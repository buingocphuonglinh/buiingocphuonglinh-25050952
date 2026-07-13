import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";

import "./styles.css";
import { getRouter } from "./router";

const router = getRouter();

const container = document.getElementById("app");
if (!container) throw new Error("#app root element not found");

createRoot(container).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
