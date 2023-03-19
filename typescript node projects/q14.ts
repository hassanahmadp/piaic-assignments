const guestList: string[] = [
  "person1",
  "person2",
  "person3"
];

for (let i = 0; i < guestList.length; i++) {
  console.log(
    `Hello ${guestList[i]}! You are invited to the dinner.`
  );
}

export {};
