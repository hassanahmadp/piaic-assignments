const person: string = "this is nadeem bhatti";
console.log(person.toUpperCase());
console.log(person.toLowerCase());
let capitalizedPersonName: string = person
  .split(" ")
  .map(word => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
  .join(" ");
console.log(capitalizedPersonName);

export {};
