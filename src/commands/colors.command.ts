import { Command } from "commander";
import printTailwindColors from "../services/printTailwindColors";
import { printUserColors } from "../services/printUserColors";

const colorsCommand = new Command("colors")
  .description("List all colors for the Tailwind CSS project")
  .option("-d, --default", "List the default color palette in Tailwind CSS")
  .option("-c, --config <path>", "Provide a custom Tailwind config file path")
  .action((options) => {
    if (options.hasOwnProperty("default")) {
      printTailwindColors();
      return;
    }

    printUserColors(options.config);
  });

export default colorsCommand;
