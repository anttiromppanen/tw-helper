import chalk from "chalk";

export function errorText(text: string) {
  console.log(`\n${chalk.bold.red("Error:")} ${text}\n`);
}

export default function printHeader(text: string) {
  console.log(chalk.bold.cyan(`\n* ${text} *\n`));
}
