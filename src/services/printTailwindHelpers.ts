import CliTable3 from "cli-table3";
import printHeader, { cssPropertyNotFoundText } from "../utils/textUtils";
import chalk from "chalk";
import { CSS_PROPERTIES_DICT } from "../const/cssProperties";

/**
 * Print Tailwind CSS helpers for a given CSS property
 * @param cssProperty - CSS property to print Tailwind CSS helpers for
 * @description Prints either a table of Tailwind CSS helpers or an error message
 */

export default function printTailwindHelpers(cssProperty: string) {
  if (!CSS_PROPERTIES_DICT.hasOwnProperty(cssProperty)) {
    cssPropertyNotFoundText();
    return;
  }

  printHeader(`Tailwind CSS helpers for ${cssProperty}`);

  const table = new CliTable3({
    colWidths: [20, 50],
  });

  const { urlToDocs, classes } = CSS_PROPERTIES_DICT[cssProperty];

  table.push(
    { Documentation: chalk.cyan(urlToDocs) },
    { Classes: chalk.white(classes.join("\n")) },
  );

  console.log(table.toString());
  console.log("");
}
