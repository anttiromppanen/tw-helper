import { Command, program } from "commander";
import printGlobalColors from "../services/printGlobalColors";

const globalColorsCommand = new Command("global-colors")
  .description("List all default global colors in Tailwind CSS")
  .action(() => printGlobalColors());

export default globalColorsCommand;
