import { readUserThemeColorsFromConfig } from "../utils/readUserConfig";
import printHeader from "../utils/textUtils";
import {
  createTableFromKeyValueArray,
  tablesSideBySide,
} from "../utils/tableUtils";

export function printUserColors(customConfigPath?: string) {
  const { extendColors, overrideColors } =
    readUserThemeColorsFromConfig(customConfigPath);

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
    [20, 30],
  );
  const overrideColorsTable = createTableFromKeyValueArray(
    overrideColorsArray,
    "Name",
    "Color",
    true,
    [20, 30],
  );

  if (!extendColors) {
    printHeader("theme.colors object");
    console.log(overrideColorsTable + "\n");
    return;
  }
  if (!overrideColors) {
    printHeader("theme.extend.colors object");
    console.log(extendColorsTable + "\n");
    return;
  }

  const { output, tablePlacesSwapped } = tablesSideBySide(
    extendColorsTable,
    overrideColorsTable,
  );

  // If the tables are swapped, print the header accordingly
  // Tables are swapped if the first table has fewer lines than the second
  if (tablePlacesSwapped) {
    printHeader(
      "Overridden colors (theme.colors)" +
        " ".repeat(25) +
        "Extended colors (theme.extend.colors)",
    );
  } else {
    printHeader(
      "Extended colors (theme.extend.colors)" +
        " ".repeat(20) +
        "Overridden colors (theme.colors)",
    );
  }

  console.log(output);
  console.log("");
}
