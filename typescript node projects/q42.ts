const magician_names: string[] = ["mag1", "mag2", "mag3", "mag4", "mag5", "mag6"];

const show_magicians = (array: string[]) => {
  array.forEach(name => console.log(name));
};

const make_great = (arr: string[], name: string) => {
  if (!arr.includes(name)) return;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === name) {
      arr[i] = `Great ${name}`;
    }
  }
};

show_magicians(magician_names);
console.log("======================");
make_great(magician_names, "mag3");
console.log("======================");
show_magicians(magician_names);

export {};
