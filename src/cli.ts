#!/bin/env node

import { program } from "commander";
import globalColors from "./commands/globalColors";

function main() {
  program
    .name("tw-helper")
    .description(
      "A CLI tool providing useful helper functions for developers using Tailwind CSS",
    )
    .version("0.0.1");

  program
    .command("global-colors")
    .description("List all default global colors in Tailwind CSS")
    .action(() => {
      console.log(globalColors());
    });

  program.parse();
}

main();
