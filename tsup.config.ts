import { defineConfig } from "tsup";

export default defineConfig({
  target: "es2020",
  format: ["cjs", "esm"],
  splitting: false,
  clean: true,
  minify: true,
});
