// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
const magician_names: string[] = ["mag1", "mag2", "mag3", "mag4", "mag5", "mag6"];

const show_magicians = (array: string[]) => {
  array.forEach(name => console.log(name));
};

export {};
