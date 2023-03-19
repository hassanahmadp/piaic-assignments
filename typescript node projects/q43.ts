// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
const magician_names: string[] = ["mag1", "mag2", "mag3", "mag4", "mag5", "mag6"];

const show_magicians = (array: string[]) => {
  array.forEach(name => console.log(name));
};

const make_great = (arr: string[], name: string): string[] => {
  const newArr: string[] = [...arr];
  if (!newArr.includes(name)) return newArr;
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === name) {
      newArr[i] = `Great ${name}`;
    }
  }
  return newArr;
};
show_magicians(magician_names);
console.log("//===================//");
let someGreatMags: string[] = make_great(magician_names, "mag3");
show_magicians(someGreatMags);
export {};
