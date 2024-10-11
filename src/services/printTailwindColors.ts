import chalk from "chalk";
import CliTable3 from "cli-table3";
import { TAILWIND_COLORS_100_TO_900 } from "../const/tailwindColors";
import printHeader from "../utils/textUtils";

/**
 * Print all global colors in Tailwind CSS in a table format
 */

export default function printTailwindColors() {
  const nameAndColors = Object.entries(TAILWIND_COLORS_100_TO_900);

  printHeader(
    "Tailwind CSS global colors, ranging from 50 to 900 in numeric scale",
  );

  // Iterate over each color group
  for (const [name, shades] of nameAndColors) {
    const shadesArray = Object.values(shades);
    const baseColor = shadesArray.pop() as string;

    const table = new CliTable3({
      head: [`${chalk.bgHex(baseColor)("  ")} ${chalk.white(name)}`],
      colWidths: [31], // 31 is magic number for right padding
    });

    // Create a string of colored blocks
    const colorsString = shadesArray
      .map((rgb) => `${chalk.bgHex(rgb)("  ")}`)
      .join(" ");

    table.push([colorsString]);

    // Render the table
    console.log(table.toString());
    console.log("");
  }
}
