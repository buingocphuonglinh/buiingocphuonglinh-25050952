import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import fs from "node:fs";
import path from "node:path";

// Absolute origin for Lovable-hosted CDN assets (/__l5e/...).
// These files live on Lovable's CDN, so on GitHub Pages we must reference them
// via the full absolute URL of the published Lovable site.
const ASSET_ORIGIN =
  process.env.ASSET_ORIGIN || "https://buingocphuonglinh.lovable.app";

const GH_REDIRECT_SCRIPT = `
(function () {
  var pathParts = location.pathname.split('/').filter(Boolean);
  var isGithubPages = location.hostname.endsWith('github.io');
  var root = isGithubPages && pathParts.length ? '/' + pathParts[0] + '/' : '/';
  sessionStorage.setItem('gh_redirect', location.href);
  location.replace(root);
})();`;

// Vite plugin: rewrite the `url` field of every `.asset.json` file at load
// time so the built bundle contains absolute URLs pointing at Lovable's CDN.
function rewriteAssetJson() {
  return {
    name: "rewrite-asset-json",
    enforce: "pre" as const,
    transform(code: string, id: string) {
      if (!id.endsWith(".asset.json")) return null;
      try {
        const json = JSON.parse(code);
        if (typeof json.url === "string" && json.url.startsWith("/__l5e/")) {
          json.url = ASSET_ORIGIN + json.url;
        }
        return { code: JSON.stringify(json), map: null };
      } catch {
        return null;
      }
    },
  };
}

// After build, copy dist/index.html to dist/404.html so SPA deep links work
// on GitHub Pages, and drop a .nojekyll file.
function githubPagesFallback() {
  return {
    name: "gh-pages-fallback",
    closeBundle() {
      const dist = path.resolve("dist");
      const index = path.join(dist, "index.html");
      if (fs.existsSync(index)) {
        // 404.html stashes the requested URL and reloads the GitHub Pages
        // project root. The root is detected at runtime so manual builds still
        // work even when BASE_PATH was not provided.
        const html = fs.readFileSync(index, "utf8");
        const injected = html.replace(
          "<head>",
          `<head>\n<script>${GH_REDIRECT_SCRIPT}</script>`,
        );
        fs.writeFileSync(path.join(dist, "404.html"), injected);
      }
      fs.writeFileSync(path.join(dist, ".nojekyll"), "");
    },
  };
}

export default defineConfig({
  // Relative asset paths make the same dist folder work under any GitHub
  // Pages repository URL instead of requiring a hard-coded /repo/ base.
  base: "./",
  plugins: [
    rewriteAssetJson(),
    TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
    githubPagesFallback(),
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: false,
  },
});
