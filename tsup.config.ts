import { defineConfig } from "tsup";

export default defineConfig({
  format: ["cjs"],
  splitting: false,
  clean: true,
  minify: true,
});
