import { Command } from "commander";

const twColorsCommand = new Command("my-colors")
  .description("List all custom colors for my Tailwind project")
  .action(() => {});

export default twColorsCommand;
