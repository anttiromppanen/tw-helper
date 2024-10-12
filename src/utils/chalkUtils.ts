import chalk from "chalk";
import { errorText } from "./textUtils";

const Color = require("color");

/**
 * Converts a color to hex format
 * @param inputColor a color in any format
 * @returns the color in hex format or null if the color is not supported
 */

export function convertColorToHex(inputColor: string) {
  if (inputColor.includes("var")) return inputColor;
  try {
    const colorAsHex = Color(inputColor);
    return colorAsHex.hex();
  } catch (error) {
    errorText(`Unsupported color format detected: ${inputColor}`);
    return null;
  }
}

/**
 * Returns a chalk colored text from a color
 * @param color a color in any format
 * @param text the text to color
 * @returns chalk.hex colored text
 */

export function chalkTextFromColor(color: string, text: string) {
  try {
    const colorAsHex = convertColorToHex(color);
    return chalk.hex(colorAsHex)(text);
  } catch (error) {
    return chalk.gray(text);
  }
}
