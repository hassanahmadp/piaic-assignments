"use strict";
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
//  The function should have one parameter that collects as many items as the function call provides,
// and it should print a summary of the sandwich that is being ordered.
// Call the function three times, using a different number of arguments each time.
Object.defineProperty(exports, "__esModule", { value: true });
const make_sandwich = (...ingredients) => {
    console.log("Your sandwich contains: ");
    ingredients.forEach(ingredient => console.log(ingredient));
};
make_sandwich("Apple", "Orange", "Strawberry");
console.log("//=====//");
make_sandwich("Ketchup", "Patti", "Bread", "Cream");
console.log("//=====//");
make_sandwich("Peanut butter", "Egg", "Bun", "Tomato", "Cheese");
