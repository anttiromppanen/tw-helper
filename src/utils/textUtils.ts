import chalk from "chalk";

export function errorText(text: string) {
  console.log(`\n${chalk.bold.red("Error:")} ${text}\n`);
}

export default function printHeader(text: string) {
  console.log(chalk.bold.cyan(`\n* ${text} *\n`));
}

export function cssPropertyNotFoundText() {
  errorText(
    "CSS property not found in Tailwind CSS. Try different keyword (i.e. backdrop-blur instead of filter-backdrop-blur, or scale instead of transform-scale).",
  );
}
