#! /usr/bin/env node
import { ask } from "./funtionalities/ask.js";
import { operate } from "./funtionalities/operations.js";
import chalk from "chalk";
const decorations = () => {
    console.log(chalk.black.bgRed("**DECORATIONS UNDER CONSIDERATION**"));
};
const app = async () => {
    decorations();
    let keepAsking = true;
    while (keepAsking) {
        const mainQues = [
            { type: "number", name: "num1", message: chalk.green("Enter first number:") },
            {
                type: "list",
                name: "opp",
                message: chalk.red("Select the operation:"),
                choices: ["Add", "Subtract", "Multiply", "Divide"],
            },
            { type: "number", name: "num2", message: chalk.bgBlackBright.green("Enter second number:") },
        ];
        const { num1, opp, num2 } = await ask(mainQues);
        console.log(operate(opp, num1, num2));
        const { askAgain } = await ask([
            { type: "confirm", name: "askAgain", message: chalk.green("Do you want to keep asking?") },
        ]);
        keepAsking = askAgain;
    }
    console.log(chalk.cyanBright("Thank you for using our calculator"));
};
app();
