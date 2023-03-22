"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
const magician_names = ["mag1", "mag2", "mag3", "mag4", "mag5", "mag6"];
const show_magicians = (array) => {
    array.forEach(name => console.log(name));
};
