"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const guestList = [
    "person1",
    "person2",
    "person3"
];
function printList(list) {
    list.forEach((el) => {
        console.log(`Hello ${el}! You are invited to the dinner.`);
    });
}
function middleIndex(arr) {
    if (arr.length % 2 === 0)
        return arr.length / 2;
    else
        return Math.ceil(arr.length / 2);
}
printList(guestList);
console.log("================================================");
console.log(`person2 can't make it to the dinner`);
const index = guestList.indexOf("person2");
guestList.splice(index, 1, "person4", "person5");
printList(guestList);
console.log("================================================");
console.log("We have found a bigger dinner table and we are adding 3 more guests to our list");
// guest in the beginning
guestList.unshift("person6");
// guest in the middle
guestList.splice(middleIndex(guestList), 0, "fdsfds");
// guest in the end using append method
// unable to find append method
guestList.push("person8");
printList(guestList);
