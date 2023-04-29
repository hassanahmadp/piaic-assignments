import inquirer from "inquirer";
export const ask = async (questions) => {
    return await inquirer.prompt(questions);
};
