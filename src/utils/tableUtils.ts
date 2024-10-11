/**
 * Combine two tables side by side with some space in between
 * @param table1 table displayed on the left
 * @param table2 table displayed on the right
 * @returns output string
 */

import chalk from "chalk";
import CliTable3 from "cli-table3";
import { chalkTextFromColor } from "./chalkUtils";

export function tablesSideBySide(table1: string, table2: string) {
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

export function createTableFromKeyValueArray(
  breakpoints: any,
  header1: string,
  header2: string,
  row1Color?: boolean,
) {
  const customRowColor = (text: string, color: string) =>
    row1Color ? chalkTextFromColor(color, text) : chalk.gray(text);

  const table = new CliTable3({
    head: [chalk.bold.cyan(header1), chalk.bold.cyan(header2)],
    colWidths: [20, 20],
  });

  breakpoints.forEach(([key, value]: [string, string]) => {
    table.push([customRowColor(key, value), chalk.gray(value)]);
  });

  return table.toString();
}
