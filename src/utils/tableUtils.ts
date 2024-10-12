import chalk from "chalk";
import CliTable3 from "cli-table3";
import { chalkTextFromColor } from "./chalkUtils";

/**
 * Combine two tables side by side with some space in between
 * @param table1 table displayed on the left
 * @param table2 table displayed on the right
 * @returns output: string, tablePlacesSwapped: boolean
 */

export function tablesSideBySide(table1: string, table2: string) {
  const table1Lines = table1.toString().split("\n");
  const table2Lines = table2.toString().split("\n");

  const tablePlacesSwapped = table1Lines.length < table2Lines.length;

  let output = "";
  const maxLines = Math.max(table1Lines.length, table2Lines.length);

  for (let i = 0; i < maxLines; i++) {
    const line1 = table1Lines[i] || ""; // If no line, use empty string
    const line2 = table2Lines[i] || ""; // If no line, use empty string

    // Swap the tables if the first table has fewer lines than the second
    if (tablePlacesSwapped) output += line2 + "   " + line1 + "\n";
    // Combine the two lines with some space in between
    else output += line1 + "   " + line2 + "\n";
  }

  return { output, tablePlacesSwapped };
}

/**
 * Create a table from an array of breakpoints
 * @param keyValueArray array of key-value pairs
 * @param header1 header for the first column
 * @param header2 header for the second column
 * @param row1Color color for the first row (optional)
 * @param customColWidths custom column widths array (optional)
 * @returns table as string
 */

export function createTableFromKeyValueArray(
  keyValueArray: any,
  header1: string,
  header2: string,
  row1Color?: boolean,
  customColWidths?: number[],
) {
  // Color converted first to hex, then to chalk
  const customRowColor = (text: string, color: string) =>
    row1Color ? chalkTextFromColor(color, text) : chalk.gray(text);

  const table = new CliTable3({
    head: [chalk.bold.cyan(header1), chalk.bold.cyan(header2)],
    style: { border: [], compact: true },
    colWidths: customColWidths || [20, 20],
  });

  keyValueArray.forEach(([key, value]: [string, string]) => {
    // Color can be type: brown: { 50: "#f7f3e9", 100: "#f0e9d8", ... }
    if (typeof value === "object") {
      // name of the color
      table.push([chalk.gray(key), ""]);
      const childObjectAsArray = Object.entries(value);

      // Render each shade of the color
      for (const [colorShade, color] of childObjectAsArray) {
        table.push([
          customRowColor(`  ─ ${colorShade}`, color as string),
          chalk.gray(color),
        ]);
      }
    } else {
      table.push([customRowColor(key, value), chalk.gray(value)]);
    }
  });

  return table.toString();
}
