import { Command } from "commander";
import printBreakpoints from "../services/printBreakpoints";
import { readUserConfig } from "../utils/readUserConfig";

const testCommand = new Command("test")
  .description("Test stuff out")
  .option("-c, --config", "Add a Custom Tailwind config file path")
  .action(() => readUserConfig());

export default testCommand;
