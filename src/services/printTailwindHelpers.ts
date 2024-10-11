import CliTable3 from "cli-table3";
import { cssPropertiesDict } from "../const/cssProperties";
import printHeader, { cssPropertyNotFoundText } from "../utils/textUtils";
import chalk from "chalk";

export default function printTailwindHelpers(cssProperty: string) {
  if (!cssPropertiesDict.hasOwnProperty(cssProperty)) {
    cssPropertyNotFoundText();
    return;
  }

  printHeader(`Tailwind CSS helpers for ${cssProperty}`);

  const table = new CliTable3({
    colWidths: [20, 50],
  });

  const { urlToDocs, classes } = cssPropertiesDict[cssProperty];

  table.push(
    { Documentation: chalk.cyan(urlToDocs) },
    { Classes: chalk.white(classes.join("\n")) },
  );

  console.log(table.toString());
  console.log("");
}
