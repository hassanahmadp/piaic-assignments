"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const guestList = [
    "person1",
    "person2",
    "person3"
];
guestList.forEach((guest) => {
    console.log(`Hello ${guest}! You are invited to the dinner.`);
});
console.log("================================================");
console.log(`person2 can't make it to the dinner`);
const index = guestList.indexOf("person2");
guestList.splice(index, 1, "person4", "person5");
guestList.forEach((guest) => {
    console.log(`Hello ${guest}! You are invited to the dinner.`);
});
