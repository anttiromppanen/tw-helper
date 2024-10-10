import chalk from "chalk";
import CliTable3 from "cli-table3";
import { TAILWIND_COLORS_100_TO_900 } from "../const/tailwind-colors";

export default function globalColors() {
  // Step 2: Create a table to display all colors
  const table = new CliTable3({
    head: ["Colors"],
    colWidths: [10], // Adjust width as necessary
  });

  const nameAndColors = Object.entries(TAILWIND_COLORS_100_TO_900);

  // Step 3: Concatenate shades for each unique color into a single string and push to the table
  for (const [baseColor, shades] of nameAndColors) {
    // Create a new table
    const table = new CliTable3({
      head: [chalk.white(baseColor)],
      colWidths: [44], // Adjust width as necessary
    });

    const redColorsString = Object.values(shades)
      .map((rgb) => `${chalk.bgHex(rgb)("  ")}`)
      .join(", ");

    table.push([redColorsString]);

    console.log(table.toString()); // Render the table
  }

  console.log(table);
}
