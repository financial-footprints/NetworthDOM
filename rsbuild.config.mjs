import { defineConfig, loadEnv } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

const { publicVars } = loadEnv();

export default defineConfig({
  plugins: [pluginReact()],
  environments: {
    web: {
      output: { target: "web" },
      source: { entry: { index: "./src/index.client" } },
    },
    ssr: {
      output: { target: "node", distPath: { root: "dist/server" } },
      source: { entry: { index: "./src/index.server" } },
    },
  },
  html: { template: "./src/assets/templates/react-root.html" },
  source: { define: publicVars },
});

export const ssrUrls = ["/"];
