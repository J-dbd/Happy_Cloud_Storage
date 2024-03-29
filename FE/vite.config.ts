import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
/* tailwind setting */

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  /* For absolute path */
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      { find: "@routes", replacement: path.resolve(__dirname, "src/routes") },
    ],
  },
});
