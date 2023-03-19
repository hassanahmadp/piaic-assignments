"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const make_album = (artist, album, tracksCount) => {
    return tracksCount ? { artist, album, tracksCount } : { artist, album };
};
console.log(make_album("The Beatles", "The Beatles: The Next Generation"));
console.log(make_album("Any are you okay", "Bad boys", 17));
