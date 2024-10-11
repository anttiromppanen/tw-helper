import chalk from "chalk";

export function errorText(text: string) {
  console.error(`\n${chalk.bold.red("Error:")} ${text}\n`);
}

export default function printHeader(text: string) {
  console.log(chalk.bold.visible(`\n* ${text} *\n`));
}

export function cssPropertyNotFoundText() {
  errorText(
    "CSS property not found in Tailwind CSS. Try different keyword (i.e. scale instead of transform-scale, or a more high level keyword display insted of inline-block).",
  );
}
