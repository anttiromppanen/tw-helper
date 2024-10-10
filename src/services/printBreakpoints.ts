import printHeader from "../utils/printHeader";
import { TAILWIND_DEFAULT_BREAKPOINTS } from "../const/tailwindBreakpoints";
import CliTable3 from "cli-table3";
import chalk from "chalk";
const fs = require("fs");
const vm = require("vm");
import path from "path";

function readUserBreakpoints() {
  const packageJsonPath = path.resolve(process.cwd(), "tailwind.config.js");

  const data = fs.readFileSync(packageJsonPath, "utf8");

  // Create a sandbox and define the `module` structure
  const sandbox = { module: { exports: {} }, require };

  const script = new vm.Script(data);
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

export default function printBreakpoints() {
  printHeader("Default Tailwind CSS breakpoints");

  const table = new CliTable3({
    head: [chalk.cyan("Name"), chalk.cyan("Size")],
    colWidths: [20, 20],
  });

  for (const [key, value] of Object.entries(TAILWIND_DEFAULT_BREAKPOINTS)) {
    table.push([chalk.gray(key), chalk.gray(value)]);
  }

  console.log(table.toString());
  console.log("");

  const userBreakpoints = readUserBreakpoints();
  console.log(userBreakpoints.screens);
}
