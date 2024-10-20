import { TAILWIND_DEFAULT_BREAKPOINTS } from "../const/tailwindBreakpoints";
import CliTable3 from "cli-table3";
import chalk from "chalk";
import printHeader from "../utils/textUtils";
import {
  readBreakpointsFromConfig,
  readUserThemeObjectFromConfig,
} from "../utils/readUserConfig";
import {
  createTableFromKeyValueArray,
  tablesSideBySide,
} from "../utils/tableUtils";

/**
 * Create tables for default and user-defined breakpoints
 * @returns a string if no user-defined breakpoints are found
 * @returns an object containing user- and default breakpoints as table.toString()
 */

function createTables(customConfigPath?: string) {
  // Check if extend.screens object exists in the user's theme
  const { extendObject, hasScreensObject } =
    readBreakpointsFromConfig(customConfigPath);

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

export default function printBreakpoints(customConfigPath?: string) {
  const tables = createTables(customConfigPath);

  // tables is typeof string if no user-defined breakpoints are found
  if (typeof tables === "string") {
    printHeader("Default Tailwind CSS breakpoints");
    console.log(tables + "\n");
    return;
  }

  const { defaultBreakpointsTable, userBreakpointsTable } = tables;
  const { output, tablePlacesSwapped } = tablesSideBySide(
    defaultBreakpointsTable,
    userBreakpointsTable,
  );

  if (tablePlacesSwapped)
    printHeader(
      " User-defined breakpoints" +
        " ".repeat(22) +
        "Default Tailwind CSS breakpoints",
    );
  else
    printHeader(
      " Default Tailwind CSS breakpoints" +
        " ".repeat(14) +
        "User-defined breakpoints",
    );

  console.log(output);
}
