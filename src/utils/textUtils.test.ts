import printHeader, { cssPropertyNotFoundText, errorText } from "./textUtils";
import chalk from "chalk";

describe("errorText", () => {
  it("should print an error message in bold red", () => {
    console.error = jest.fn();
    errorText("An error message");
    expect(console.error).toHaveBeenCalledWith(
      `\n${chalk.bold.red("Error:")} An error message\n`,
    );
  });
});

describe("printHeader", () => {
  it("should print a header in bold cyan", () => {
    console.log = jest.fn();
    printHeader("A header");
    expect(console.log).toHaveBeenCalledWith(chalk.bold.cyan(`\nA header\n`));
  });
});

describe("cssPropertyNotFoundText", () => {
  it("should print a specific error message in bold red", () => {
    console.error = jest.fn();
    cssPropertyNotFoundText();
    expect(console.error).toHaveBeenCalledWith(
      `\n${chalk.bold.red("Error:")} CSS property not found in Tailwind CSS. Try different keyword (i.e. scale instead of transform-scale, or a more high level keyword display insted of inline-block).\n`,
    );
  });
});
