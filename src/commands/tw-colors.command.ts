import { Command } from "commander";
import printTailwindColors from "../services/printTailwindColors";

const twColorsCommand = new Command("tw-colors")
  .description("List all default colors in Tailwind CSS")
  .action(() => printTailwindColors());

export default twColorsCommand;
