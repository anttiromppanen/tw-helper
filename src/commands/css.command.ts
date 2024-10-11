import { Command } from "commander";

const cssCommand = new Command("css")
  .description("Print Tailwind helper tied to a css property")
  .action(() => {});

export default cssCommand;
