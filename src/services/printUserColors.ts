import CliTable3 from "cli-table3";
import { readUserThemeColorsFromConfig } from "../utils/readUserConfig";
import printHeader from "../utils/textUtils";
import {
  createTableFromKeyValueArray,
  tablesSideBySide,
} from "../utils/tableUtils";

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
    true,
  );
  const overrideColorsTable = createTableFromKeyValueArray(
    overrideColorsArray,
    "Name",
    "Color",
    true,
  );

  console.log(tablesSideBySide(extendColorsTable, overrideColorsTable));
}
