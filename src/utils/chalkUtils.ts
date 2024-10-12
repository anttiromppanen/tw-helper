import chalk from "chalk";
import { errorText } from "./textUtils";

const Color = require("color");

export function convertColorToHex(inputColor: string) {
  if (inputColor.includes("var")) return inputColor;
  try {
    const colorAsHex = Color(inputColor);
    return colorAsHex.hex();
  } catch (error) {
    errorText("Unsupported color format detected.");
    return null;
  }
}

export function chalkTextFromColor(color: string, text: string) {
  const colorAsHex = convertColorToHex(color);
  return chalk.hex(colorAsHex)(text);
}
