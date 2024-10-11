import { TAILWIND_DEFAULT_BREAKPOINTS } from "../const/tailwindBreakpoints";
import CliTable3 from "cli-table3";
import chalk from "chalk";
import printHeader from "../utils/textUtils";
import { readUserThemeObjectFromConfig } from "../utils/readUserConfig";
import {
  createTableFromKeyValueArray,
  tablesSideBySide,
} from "../utils/tableUtils";

/**
 * Create tables for default and user-defined breakpoints
 * @returns a string if no user-defined breakpoints are found
 * @returns an object containing user- and default breakpoints as table.toString()
 */

function createTables() {
  // Check if extend.screens object exists in the user's theme
  const themeObject = readUserThemeObjectFromConfig();
  const extendObject =
    themeObject.hasOwnProperty("extend") && themeObject.extend;
  const hasScreensObject = extendObject.hasOwnProperty("screens");

  // create default breakpoints table
  const defaultBreakpointsArray = Object.entries(TAILWIND_DEFAULT_BREAKPOINTS);
  const defaultBreakpointsTable = createTableFromKeyValueArray(
    defaultBreakpointsArray,
    "Name",
    "Size",
  );

  if (!hasScreensObject) {
    return defaultBreakpointsTable;
  }

  // create user breakpoints table
  const userBreakpoints = extendObject.screens;
  const userBreakpointsArray = Object.entries(userBreakpoints);

  const userBreakpointsTable = createTableFromKeyValueArray(
    userBreakpointsArray,
    "Name",
    "Size",
  );

  return { defaultBreakpointsTable, userBreakpointsTable };
}

export default function printBreakpoints() {
  const tables = createTables();

  // tables is typeof string if no user-defined breakpoints are found
  if (typeof tables === "string") {
    printHeader("Default Tailwind CSS breakpoints");
    console.log(tables + "\n");
    return;
  }

  printHeader(
    "Default Tailwind CSS breakpoints *" +
      " ".repeat(11) +
      "* User-defined breakpoints",
  );

  const { defaultBreakpointsTable, userBreakpointsTable } = tables;
  console.log(tablesSideBySide(defaultBreakpointsTable, userBreakpointsTable));
}
