const fs = require("fs");
const vm = require("vm");
import chalk from "chalk";
import path from "path";
import { errorText } from "./textUtils";

/**
 * Read the user's Tailwind config file from root directory
 * @returns Returns the config file in utf8 format
 */

export function readUserConfig() {
  const tailwindJs = path.resolve(process.cwd(), "tailwind.config.js");
  const tailwindTs = path.resolve(process.cwd(), "tailwind.config.ts");
  const tailwindCjs = path.resolve(process.cwd(), "tailwind.config.cjs");
  const tailwindMjs = path.resolve(process.cwd(), "tailwind.config.mjs");
  const tailwindJson = path.resolve(process.cwd(), "tailwind.config.json");

  let configFile;

  switch (true) {
    case fs.existsSync(tailwindJs):
      configFile = tailwindJs;
      break;
    case fs.existsSync(tailwindTs):
      configFile = tailwindTs;
      break;
    case fs.existsSync(tailwindCjs):
      configFile = tailwindCjs;
      break;
    case fs.existsSync(tailwindMjs):
      configFile = tailwindMjs;
      break;
    case fs.existsSync(tailwindJson):
      configFile = tailwindJson;
      break;
    default:
      return;
  }

  try {
    const data = fs.readFileSync(configFile, "utf8");
    return data;
  } catch (error) {
    errorText("Could not locate Tailwind config file");
  }
}

export function readUserExtendObjectFromConfig() {
  const configFile = readUserConfig();

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
    console.log("No extend object found in the Tailwind config");
    return null;
  }
}
