const guestList: string[] = [
  "person1",
  "person2",
  "person3"
];

guestList.forEach((guest: string) => {
  console.log(
    `Hello ${guest}! You are invited to the dinner.`
  );
});

console.log(
  "================================================"
);

console.log(
  `person2 can't make it to the dinner`
);
const index = guestList.indexOf("person2");
guestList.splice(index, 1, "person4", "person5");

guestList.forEach((guest: string) => {
  console.log(
    `Hello ${guest}! You are invited to the dinner.`
  );
});

export {};
