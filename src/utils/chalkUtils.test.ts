import chalk from "chalk";
import { chalkTextFromColor, convertColorToHex } from "./chalkUtils";

describe("convertColorToHex", () => {
  beforeEach(() => {
    console.error = jest.fn();
  });

  it("should conver hex to hex", () => {
    const hexColor = "#ff0000";
    const result = convertColorToHex(hexColor);

    expect(result?.toUpperCase()).toBe(hexColor.toUpperCase());
  });

  it("should convert short hex to hex", () => {
    const shortHexColor = "#f00";
    const result = convertColorToHex(shortHexColor);

    expect(result?.toUpperCase()).toBe("#FF0000");
  });

  it("should convert hex with alpha to hex", () => {
    const hexColorWithAlpha = "#ff0000ff";
    const result = convertColorToHex(hexColorWithAlpha);

    expect(result?.toUpperCase()).toBe("#FF0000");
  });

  it("should convert rgb to hex", () => {
    const rgbColor = "rgb(255, 0, 0)";
    const result = convertColorToHex(rgbColor);

    expect(result?.toUpperCase()).toBe("#FF0000");
  });

  it("should convert rgba to hex", () => {
    const rgbaColor = "rgba(255, 0, 0, 1)";
    const result = convertColorToHex(rgbaColor);

    expect(result?.toUpperCase()).toBe("#FF0000");
  });

  it("should convert hsl to hex", () => {
    const hslColor = "hsl(0, 100%, 50%)";
    const result = convertColorToHex(hslColor);

    expect(result?.toUpperCase()).toBe("#FF0000");
  });

  it("should convert hsla to hex", () => {
    const hslaColor = "hsla(0, 100%, 50%, 1)";
    const result = convertColorToHex(hslaColor);

    expect(result?.toUpperCase()).toBe("#FF0000");
  });

  it("should convert color name to hex", () => {
    const colorName = "red";
    const result = convertColorToHex(colorName);

    expect(result?.toUpperCase()).toBe("#FF0000");
  });

  it("should return the color if it contains 'var'", () => {
    const varColor = "var(--color-red)";
    const result = convertColorToHex(varColor);

    expect(result).toBe(varColor);
  });

  it("should return null for unsupported color", () => {
    const unsupportedColor = "unsupported";
    const result = convertColorToHex(unsupportedColor);

    expect(result).toBeNull();
  });
});

describe("chalkTextFromColor", () => {
  it("should return chalk colored text from a color", () => {
    const color = "#ff0000";
    const text = "Hello, World!";
    const result = chalkTextFromColor(color, text);

    expect(result).toBe(chalk.hex("#ff0000")(text));
  });

  it("should return chalk colored text from a color name", () => {
    const color = "red";
    const text = "Hello, World!";
    const result = chalkTextFromColor(color, text);

    expect(result).toBe(chalk.hex("#ff0000")(text));
  });

  it("should return chalk colored text from a short hex color", () => {
    const color = "#f00";
    const text = "Hello, World!";
    const result = chalkTextFromColor(color, text);

    expect(result).toBe(chalk.hex("#ff0000")(text));
  });

  it("should return chalk colored text from a color with alpha", () => {
    const color = "#ff0000ff";
    const text = "Hello, World!";
    const result = chalkTextFromColor(color, text);

    expect(result).toBe(chalk.hex("#ff0000")(text));
  });

  it("should return gray text for unsupported color", () => {
    const color = "unsupported";
    const text = "Hello, World!";
    const result = chalkTextFromColor(color, text);

    expect(result).toBe(chalk.gray(text));
  });
});
