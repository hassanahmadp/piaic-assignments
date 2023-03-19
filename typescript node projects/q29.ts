// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
const favourite_fruits: string[] = ["Apples", "Oranges", "Pears", "Grapes"];
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
if (favourite_fruits.includes("Apples")) {
  console.log("You really like apples!");
} else if (favourite_fruits.includes("lichi")) {
  console.log("lichi is not in your list.");
}
export { favourite_fruits };
