import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "happy-dom", // or 'jsdom', 'node'
    // coverage: {
    //     reporter: ['text', 'json', 'html'],
    //   },
  },
});
