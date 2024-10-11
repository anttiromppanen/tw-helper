import { TAILWIND_DEFAULT_BREAKPOINTS } from "../const/tailwindBreakpoints";
import CliTable3 from "cli-table3";
import chalk from "chalk";
import printHeader from "../utils/textUtils";
import { readUserThemeObjectFromConfig } from "../utils/readUserConfig";

/**
 * Combine two tables side by side with some space in between
 * @param table1 table displayed on the left
 * @param table2 table displayed on the right
 * @returns output string
 */

function tablesSideBySide(table1: string, table2: string) {
  const table1Lines = table1.toString().split("\n");
  const table2Lines = table2.toString().split("\n");

  let output = "";
  const maxLines = Math.max(table1Lines.length, table2Lines.length);

  for (let i = 0; i < maxLines; i++) {
    const line1 = table1Lines[i] || ""; // If no line, use empty string
    const line2 = table2Lines[i] || ""; // If no line, use empty string

    // Combine the two lines with some space in between
    output += line1 + "   " + line2 + "\n";
  }

  return output;
}

/**
 * Create a table from an array of breakpoints
 * @param breakpoints array of breakpoints
 * @returns table as string
 */

function createTableFromBreakpointsArray(breakpoints: any) {
  const table = new CliTable3({
    head: [chalk.bold.cyan("Name"), chalk.bold.cyan("Size")],
    colWidths: [20, 20],
  });

  breakpoints.forEach(([key, value]: [string, string]) => {
    table.push([chalk.gray(key), chalk.gray(value)]);
  });

  return table.toString();
}

/**
 * Create tables for default and user-defined breakpoints
 * @returns a string if no user-defined breakpoints are found
 * @returns an object containing user- and default breakpoints as table.toString()
 */

function createTables() {
  const themeObject = readUserThemeObjectFromConfig();
  const extendObject =
    themeObject.hasOwnProperty("extend") && themeObject.extend;
  const hasScreensObject = extendObject.hasOwnProperty("screens");

  const defaultBreakpointsArray = Object.entries(TAILWIND_DEFAULT_BREAKPOINTS);
  const defaultBreakpointsTable = createTableFromBreakpointsArray(
    defaultBreakpointsArray,
  );

  if (!hasScreensObject) {
    return defaultBreakpointsTable;
  }

  const userBreakpoints = extendObject.screens;
  const userBreakpointsArray = Object.entries(userBreakpoints);

  const userBreakpointsTable =
    createTableFromBreakpointsArray(userBreakpointsArray);

  return { defaultBreakpointsTable, userBreakpointsTable };
}

export default function printBreakpoints() {
  const tables = createTables();

  if (typeof tables === "string") {
    printHeader("Default Tailwind CSS breakpoints");
    console.log(
      createTableFromBreakpointsArray(
        Object.entries(TAILWIND_DEFAULT_BREAKPOINTS),
      ),
    );
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
