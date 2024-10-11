import { Command } from "commander";
import printTailwindHelpers from "../services/printTailwindHelpers";

const cssCommand = new Command("css")
  .description("Print Tailwind helper tied to a css property")
  .argument(
    "<property>",
    "CSS property to retrieve Tailwind helper for (e.g. css margin-top)",
  )
  .action((property) => printTailwindHelpers(property));

export default cssCommand;
