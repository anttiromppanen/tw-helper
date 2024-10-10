import chalk from "chalk";

export default function printHeader(text: string) {
  console.log(chalk.bold.cyan(`\n* ${text} *\n`));
}
