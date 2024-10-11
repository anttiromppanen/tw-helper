const fs = require("fs");
const vm = require("vm");
import path from "path";
import { errorText } from "./textUtils";
import {
  COMMON_CSS_FILES,
  COMMON_GLOBAL_CSS_FILELOCATIONS,
} from "../const/cssFileLocations";

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

/**
 * Tries to locate a global CSS file in the project
 * @param customPath - Custom path to the global CSS file (optional)
 * @returns Returns the global CSS file in utf8 format or an error message
 */

export function readGlobalCssFileFromConfig(customPath?: string) {
  // Check if a custom path is provided, and skip the rest if so
  if (customPath) {
    const cssGlobalFile = readUserConfig(
      [customPath],
      "Could not locate a global CSS file",
    );

    return cssGlobalFile;
  }

  // Create all possible combinations of locations and files
  // Dummy way of finding the file, but works for now
  function createCombinations(locations: string[], files: string[]) {
    const combinations = [];

    for (const location of locations) {
      for (const file of files) {
        combinations.push(location + file);
      }
    }

    return combinations;
  }

  const allCombinations = createCombinations(
    COMMON_GLOBAL_CSS_FILELOCATIONS,
    COMMON_CSS_FILES,
  );

  const cssGlobalFile = readUserConfig(
    allCombinations,
    "Could not locate a global CSS file",
  );

  return cssGlobalFile;
}

export function readUserThemeObjectFromConfig() {
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
  if (tailwindConfig.theme) {
    const themeObject = tailwindConfig.theme;

    // Do something with the extend object (e.g., return it or modify it)
    return themeObject;
  } else {
    return {};
  }
}
