const guestList: string[] = [
  "person1",
  "person2",
  "person3"
];

function printList(list: string[]): void {
  if (list.length === 0) {
    console.log(
      "there is no one in the invite list"
    );
    return;
  }
  list.forEach((el: string) => {
    console.log(
      `Hello ${el}! You are invited to the dinner.`
    );
  });
}

function middleIndex(arr: string[]): number {
  if (arr.length % 2 === 0) return arr.length / 2;
  else return Math.ceil(arr.length / 2);
}

printList(guestList);

console.log(
  "================================================"
);

console.log(
  `person2 can't make it to the dinner`
);
const index = guestList.indexOf("person2");
guestList.splice(index, 1, "person4", "person5");

printList(guestList);

console.log(
  "================================================"
);
console.log(
  "We have found a bigger dinner table and we are adding 3 more guests to our list"
);

// guest in the beginning
guestList.unshift("person6");
// guest in the middle
guestList.splice(
  middleIndex(guestList),
  0,
  "person7"
);

// guest in the end using append method
// unable to find append method
guestList.push("person8");

printList(guestList);

console.log(
  "================================================"
);
console.log(
  "Our bigger dinner table can't arrive on time so right now we can only invite 2 people"
);

let initialLength = guestList.length;

for (let i = 0; i < initialLength; i++) {
  if (guestList.length <= 2) break;
  let guest: string = guestList.pop()!;
  console.log(
    `Hello ${guest}! We are sorry to say, you are not invited to the dinner.`
  );
}

printList(guestList);

console.log("Removing all people");

for (let i = 0; i < 2; i++) {
  guestList.pop()!;
}
printList(guestList);

export {};
