import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";

import "./styles.css";
import { getRouter } from "./router";

function normalizeGitHubPagesUrl() {
  if (!window.location.hostname.endsWith("github.io")) return;

  const pathParts = window.location.pathname.split("/").filter(Boolean);
  if (pathParts.length <= 1) return;

  const [repoName, ...routeParts] = pathParts;
  const routePath = routeParts.join("/").replace(/\/$/, "");
  const anchorByPath: Record<string, string> = {
    "": "",
    "index.html": "",
    "gioi-thieu": "gioi-thieu",
    "tong-quan": "tong-quan",
    "du-an": "du-an",
    "tong-ket": "tong-ket",
  };

  const anchor = anchorByPath[routePath] ?? "";
  const nextUrl = `/${repoName}/${anchor ? `#${anchor}` : window.location.hash}`;

  window.history.replaceState(null, "", nextUrl);
}

normalizeGitHubPagesUrl();

const router = getRouter();

const container = document.getElementById("app");
if (!container) throw new Error("#app root element not found");

createRoot(container).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
