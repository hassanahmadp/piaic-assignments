"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person = "this is nadeem bhatti";
console.log(person.toUpperCase());
console.log(person.toLowerCase());
let capitalizedPersonName = person
    .split(" ")
    .map(word => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
console.log(capitalizedPersonName);
