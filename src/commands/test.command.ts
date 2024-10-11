import { Command } from "commander";
import { printUserColors } from "../services/printUserColors";

const testCommand = new Command("test")
  .description("Test stuff out")
  .option("-c, --config", "Add a Custom Tailwind config file path")
  .action(() => printUserColors());

export default testCommand;
