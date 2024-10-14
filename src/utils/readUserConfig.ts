import * as fs from "fs";
import * as vm from "vm";
import path from "path";
import { errorText } from "./textUtils";
import {
  COMMON_CSS_FILES,
  COMMON_GLOBAL_CSS_FILELOCATIONS,
} from "../const/cssFileLocations";

export function isValidFileExtension(filepath?: string) {
  if (!filepath) return;

  const validExtensions = [".js", ".ts", ".cjs", ".mjs", ".json"];
  let fileExtension = "";

  try {
    fileExtension = path.extname(filepath);
  } catch (error) {
    errorText("Invalid file extension");
    process.exit(1);
  } finally {
    const isValidFile = validExtensions.includes(fileExtension);
    if (!isValidFile) {
      errorText(
        `Invalid file extension. Valid file extensions are: ${validExtensions.join(", ")}`,
      );
      process.exit(1);
    }
  }
}

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
    const data = fs.readFileSync(configFile!, "utf8");
    return data;
  } catch (error) {
    errorText(errorMessage);
    process.exit(1);
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

/**
 * Read user-defined theme object from the Tailwind config file
 * @param customConfigPath - Custom path to the Tailwind config file (optional)
 * @returns Returns the theme object from the Tailwind config file, or an empty object
 */

export function readUserThemeObjectFromConfig(customConfigPath?: string) {
  const filePaths = [
    "tailwind.config.js",
    "tailwind.config.ts",
    "tailwind.config.cjs",
    "tailwind.config.mjs",
    "tailwind.config.json",
  ];

  const configFile = readUserConfig(
    customConfigPath ? [customConfigPath] : filePaths,
    "Could not locate Tailwind config file. If it is not in the root directory, or has been renamed, please provide a custom path with the -c flag",
  );

  // File is JSON if it starts with {
  if (configFile.startsWith("{")) {
    const jsonObject = JSON.parse(configFile);
    return jsonObject.theme;
  }

  // Transform ES module export to CommonJS export
  // Without this, the script will throw a SyntaxError
  const transformedContent = configFile.replace(
    /export default/,
    "module.exports =",
  );

  // Create a sandbox and define the `module` structure
  const sandbox = { module: { exports: {} }, require };

  const script = new vm.Script(transformedContent);
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

/**
 * Read user-defined theme colors from the Tailwind config file
 * @description Reads the 'colors' object from the root of config, and from extend object
 * @param customConfigPath - Custom path to the Tailwind config file (optional)
 * @returns Returns an object with overrideColors and extendColors
 * @overrideColors are the colors object from the root of the config
 * @extendColors are the colors object from the extend object
 */

export function readUserThemeColorsFromConfig(customConfigPath?: string) {
  isValidFileExtension(customConfigPath!);

  const themeObject = readUserThemeObjectFromConfig(customConfigPath);

  const overrideColors =
    themeObject.hasOwnProperty("colors") && themeObject.colors;

  const extendColors =
    themeObject.extend?.hasOwnProperty("colors") && themeObject.extend.colors;

  return { overrideColors, extendColors };
}
