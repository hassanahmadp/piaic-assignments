"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
function make_shirt(size = "lg", message = "I love TypeScript") {
    console.log(`A shirt of ${size} size with a message of "${message}" printed on it.`);
}
// Make a large shirt and a medium shirt with the default message,
make_shirt();
make_shirt("md");
// and a shirt of any size with a different message.
make_shirt("sm", "Nothing Happens.");
