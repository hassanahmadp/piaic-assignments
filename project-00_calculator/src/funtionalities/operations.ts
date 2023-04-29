export const operate = (
  opp: "Add" | "Subtract" | "Multiply" | "Divide",
  num1: number,
  num2: number,
): number => {
  switch (opp) {
    case "Add":
      return num1 + num2;
    case "Subtract":
      return num1 - num2;

    case "Multiply":
      return num1 * num2;

    case "Divide":
      return num1 / num2;
  }
};
