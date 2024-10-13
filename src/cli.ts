#!/bin/env node

import { Command } from "commander";
import breakpointsCommand from "./commands/breakpoints.command";
import cssCommand from "./commands/css.command";
import colorsCommand from "./commands/colors.command";

const program = new Command();

function main() {
  program
    .name("tw-helper")
    .description(
      "A CLI tool providing useful helper functions for developers using Tailwind CSS",
    )
    .version("1.0.0");

  program.addCommand(colorsCommand);
  program.addCommand(breakpointsCommand);
  program.addCommand(cssCommand);

  program.parse();
}

main();
