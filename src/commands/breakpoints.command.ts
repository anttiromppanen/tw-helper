import { Command } from "commander";
import printBreakpoints from "../services/printBreakpoints";

const breakpointsCommand = new Command("breakpoints")
  .description("Print all default breakpoints in Tailwind CSS")
  .option("-c, --config <path>", "Provide a custom Tailwind config file path")
  .action((options) => printBreakpoints(options.config));

export default breakpointsCommand;
