interface mount {
  name: string;
  height: number | "Don't know";
  country?: string;
}

const car: string = "subaru";
const person: string = "John Doe";
const mountain: mount = { name: "k2", height: 8164, country: "Pakistan" };

console.log("Test 1: Is car == 'subaru' ? I predict true.", car == "subaru");
console.log("Test 2: Is person == 'John Doe' ? I predict true.", person == "John Doe");
console.log("Test 3: Is mountain.name == 'k2' ? I predict true.", mountain.name == "k2");
console.log("Test 4: Is mountain.height == 8164 ? I predict true.", mountain.height == 8164);
console.log(
  "Test 5: Is mountain.country == 'Pakistan' ? I predict true.",
  mountain.country == "Pakistan"
);
console.log("Test 6: Is car == 'subary' ? I predict false.", car == "subary");
console.log("Test 7: Is person == 'John Wick' ? I predict false.", person == "John Wick");
console.log("Test 8: Is mountain.name == 'Everest' ? I predict false.", mountain.name == "Everest");
console.log("Test 9: Is mountain.height == 5154 ? I predict false.", mountain.height == 5154);
console.log(
  "Test 10: Is mountain.country == 'Nepal' ? I predict false.",
  mountain.country == "Nepal"
);

export {};
