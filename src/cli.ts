#!/bin/env node

import { Command } from "commander";
import globalColorsCommand from "./commands/global-colors";
import breakpointsCommand from "./commands/breakpoints";

const program = new Command();

function main() {
  program
    .name("tw-helper")
    .description(
      "A CLI tool providing useful helper functions for developers using Tailwind CSS",
    )
    .version("0.0.1");

  program.addCommand(globalColorsCommand);
  program.addCommand(breakpointsCommand);

  program.parse();
}

main();
