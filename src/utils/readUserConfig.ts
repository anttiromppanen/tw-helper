const fs = require("fs");
const vm = require("vm");
import chalk from "chalk";
import path from "path";
import { errorText } from "./textUtils";

/**
 * Try to read config file from the given paths
 * @param paths - Array of paths to check for the config file
 * @param errorMessage - Error message to display if the config file is not found
 * @returns Returns the config file in utf8 format
 */

export function readUserConfig(paths: string[], errorMessage: string) {
  let configFile;

  // Loop through the paths and check if the file exists
  for (const filepath of paths) {
    const resolvedPath = path.resolve(process.cwd(), filepath);
    if (fs.existsSync(resolvedPath)) {
      configFile = resolvedPath;
      break;
    }
  }

  try {
    const data = fs.readFileSync(configFile, "utf8");
    return data;
  } catch (error) {
    errorText(errorMessage);
  }
}

export function readUserExtendObjectFromConfig() {
  const filePaths = [
    "tailwind.config.js",
    "tailwind.config.ts",
    "tailwind.config.cjs",
    "tailwind.config.mjs",
    "tailwind.config.json",
  ];

  const configFile = readUserConfig(
    filePaths,
    "Could not locate Tailwind config file",
  );

  // Create a sandbox and define the `module` structure
  const sandbox = { module: { exports: {} }, require };

  const script = new vm.Script(configFile);
  script.runInNewContext(sandbox);

  // Extract the Tailwind config object
  const tailwindConfig = sandbox.module.exports as any;

  // Extract the 'extend' object
  if (tailwindConfig.theme && tailwindConfig.theme.extend) {
    const extendObject = tailwindConfig.theme.extend;

    // Do something with the extend object (e.g., return it or modify it)
    return extendObject;
  } else {
    return {};
  }
}
