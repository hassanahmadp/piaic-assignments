import inquirer from "inquirer";

export interface Question {
  name: string;
  type: string;
  message: string;
  choices?: string[];
}

export const ask = async <T>(questions: Question[]): Promise<T> => {
  return await inquirer.prompt(questions);
};
