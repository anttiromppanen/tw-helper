import { Command } from "commander";
import printBreakpoints from "../services/printBreakpoints";

const breakpointsCommand = new Command("breakpoints")
  .description("Print all default breakpoints in Tailwind CSS")
  .action(() => printBreakpoints());

export default breakpointsCommand;
