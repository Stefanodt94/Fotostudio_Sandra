import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

const dev = process.env.NODE_ENV === "development";

export default defineConfig({
  plugins: [sveltekit(), tailwindcss()],
  resolve: {
    alias: {
      $data: path.resolve("./src/data"),
    },
  },
  base: dev ? "/" : "/Fotostudio_Sandra/",
});
