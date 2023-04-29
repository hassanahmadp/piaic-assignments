#! /usr/bin/env node
import { Question, ask } from "./funtionalities/ask.js";
import { operate } from "./funtionalities/operations.js";
import chalk from "chalk";

interface Answer {
  num1: number;
  num2: number;
  opp: "Add" | "Subtract" | "Multiply" | "Divide";
}
//vi
const decorations = (): void => {
  console.log(
    chalk.red(
      " /$$$$$$$$ /$$$$$$$$ /$$       /$$$$$$$$ /$$   /$$ /$$       /$$$$$$$$ /$$$$$$$$ /$$$$$$$$ /$$$$$$$ ",
    ),
  );
  console.log(
    chalk.hex("#FFA500")(
      "| $$_____/| $$__/ $$| $$      | $$_____/| $$  | $$| $$      | $$__/ $$|__  $$__/| $$__/ $$| $$__/ $$",
    ),
  );
  console.log(
    chalk.yellow(
      "| $$      | $$  | $$| $$      | $$      | $$  | $$| $$      | $$  | $$   | $$   | $$  | $$| $$  \\ $$",
    ),
  );
  console.log(
    chalk.green(
      "| $$      | $$$$$$$$| $$      | $$      | $$  | $$| $$      | $$$$$$$$   | $$   | $$  | $$| $$$$$$$ ",
    ),
  );
  console.log(
    chalk.blue(
      "| $$      | $$__/ $$| $$      | $$      | $$  | $$| $$      | $$__/ $$   | $$   | $$  | $$| $$__/ $$",
    ),
  );
  console.log(
    chalk.hex("#4B0082")(
      "| $$      | $$  | $$| $$      | $$      | $$  | $$| $$      | $$  | $$   | $$   | $$  | $$| $$  \\ $$",
    ),
  );
  console.log(
    chalk.hex("#8F00FF")(
      "| $$$$$$$$| $$  | $$| $$$$$$$$| $$$$$$$$| $$$$$$$$| $$$$$$$$| $$  | $$   | $$   | $$$$$$$$| $$  | $$",
    ),
  );
  console.log(
    chalk.white(
      "|________/|__/  |__/|________/|________/|________/|________/|__/  |__/   |__/   |________/|__/  |__/",
    ),
  );
};

const app = async () => {
  decorations();
  let keepAsking: boolean = true;
  while (keepAsking) {
    const mainQues: Question[] = [
      { type: "number", name: "num1", message: chalk.green("Enter first number:") },
      {
        type: "list",
        name: "opp",
        message: chalk.red("Select the operation:"),
        choices: ["Add", "Subtract", "Multiply", "Divide"],
      },
      { type: "number", name: "num2", message: chalk.bgBlackBright.green("Enter second number:") },
    ];
    const { num1, opp, num2 } = await ask<Answer>(mainQues);

    console.log(operate(opp, num1, num2));

    const { askAgain } = await ask<{ askAgain: boolean }>([
      { type: "confirm", name: "askAgain", message: chalk.green("Do you want to keep asking?") },
    ]);
    keepAsking = askAgain;
  }
  console.log(chalk.cyanBright("Thank you for using our calculator"));
};

app();
