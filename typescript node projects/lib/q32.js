"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
const current_users = [
    "user1",
    "user2",
    "user3",
    "user4",
    "user5",
    "user6",
    "user7",
    "user8",
    "user9",
    "user10"
];
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
const new_users = [
    "user7",
    "user8",
    "user9",
    "user10",
    "user11",
    "user12",
    "user13",
    "user14",
    "user15",
    "user16"
];
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
for (let i = 0; i < new_users.length; i++) {
    let included = false;
    // This can be done with Array methods, forEach and includes but i am doing this for a deeper practice
    for (let j = 0; j < current_users.length; j++) {
        if (current_users[j] === new_users[i]) {
            included = true;
            break;
        }
        else
            included = false;
    }
    included
        ? console.log("Sorry, You will need to enter a new username as this is already taken.")
        : console.log("Hurray! This username is available, you can take and use it for good.");
}
