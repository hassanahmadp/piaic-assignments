const car: string = "subaru";

const firstLetter = (str: string): string => str.at(0)!;
const lastLetter = (str: string): string => str.at(-1)!;

console.log("Test 1: Is car.length == 6? I predict true.", car.length == 6);
console.log("Test 2: Is firstLetter(car) == 's'? I predict true.", firstLetter(car) == "s");
console.log("Test 3: Is lastLetter(car) == 'u'? I predict true.", lastLetter(car) == "u");
console.log("Test 4: Is car == 'subaru'? I predict true.", car == "subaru");
console.log(
  `Test 5: Is car.split("a")[0] == 'sub' && car.split("a").at(-1) == 'ru'? I predict true.`,
  car.split("a")[0] == "sub" && car.split("a").at(-1) == "ru"
);
console.log("Test 6: Is firstLetter(car) == 'a'? I predict false.", firstLetter(car) == "a");
console.log("Test 7: Is lastLetter(car) == 'y'? I predict false.", lastLetter(car) == "y");
console.log(
  `Test 8: Is car.split("a")[0] == 'sub' && car.split("a").at(-1) == 'bu'? I predict false.`,
  car.split("a")[0] == "sub" && car.split("a").at(-1) == "bu"
);
console.log("Test 9: Is car == 'kia'? I predict false.", car == "kia");
console.log("Test 10: Is car.length == 19? I predict false.", car.length == 19);

export {};
