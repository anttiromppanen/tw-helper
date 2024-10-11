#!/bin/env node

import { Command } from "commander";
import breakpointsCommand from "./commands/breakpoints.command";
import testCommand from "./commands/test.command";
import cssCommand from "./commands/css.command";
import twColorsCommand from "./commands/tw-colors.command";

const program = new Command();

function main() {
  program
    .name("tw-helper")
    .description(
      "A CLI tool providing useful helper functions for developers using Tailwind CSS",
    )
    .version("0.0.1");

  program.addCommand(twColorsCommand);
  program.addCommand(breakpointsCommand);
  program.addCommand(cssCommand);
  program.addCommand(testCommand);

  program.parse();
}

main();
