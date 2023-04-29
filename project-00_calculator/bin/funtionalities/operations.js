export const operate = (opp, num1, num2) => {
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
