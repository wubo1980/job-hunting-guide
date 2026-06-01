import { resolve } from "node:path";

import { defineConfig } from "vitest/config";

/** Configures Vitest to understand the project's path alias. */
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname),
    },
  },
  test: {
    environment: "node",
  },
});
