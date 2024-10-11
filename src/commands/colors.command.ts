import { Command, program } from "commander";
import printTailwindColors from "../services/printTailwindColors";

const colorsCommand = new Command("colors")
  .description("List all default and user-defined colors in Tailwind CSS")
  .action(() => printTailwindColors());

export default colorsCommand;
