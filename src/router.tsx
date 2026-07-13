import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const getBasepath = () => {
  const baseUrl = import.meta.env.BASE_URL || "/";

  if (baseUrl && baseUrl !== "/" && baseUrl !== "./") {
    return baseUrl.replace(/\/$/, "");
  }

  if (typeof window !== "undefined" && window.location.hostname.endsWith("github.io")) {
    const [repoName] = window.location.pathname.split("/").filter(Boolean);
    return repoName ? `/${repoName}` : "/";
  }

  return "/";
};

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    basepath: getBasepath(),
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
