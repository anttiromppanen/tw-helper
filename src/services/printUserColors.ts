import CliTable3 from "cli-table3";
import { readUserThemeColorsFromConfig } from "../utils/readUserConfig";
import printHeader from "../utils/textUtils";
import { createTableFromKeyValueArray } from "../utils/tableUtils";

export function printUserColors() {
  const { extendColors, overrideColors } = readUserThemeColorsFromConfig();

  if (!extendColors && !overrideColors) {
    printHeader("No user-defined colors found in the Tailwind config file");
    return;
  }

  const extendColorsArray = Object.entries(extendColors);
  const overrideColorsArray = Object.entries(overrideColors);

  const extendColorsTable = createTableFromKeyValueArray(
    extendColorsArray,
    "Name",
    "Color",
  );
  const overrideColorsTable = createTableFromKeyValueArray(
    overrideColorsArray,
    "Name",
    "Color",
  );

  console.log(extendColorsTable.toString());
  console.log(overrideColorsTable.toString());
}
