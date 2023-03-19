let places: string[] = ["Paris", "London", "Berlin", "Rome", "Madrid"];

function assendingSort(arr: string[], mutable: boolean = false): string[] {
  if (mutable) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }

    return arr;
  } else {
    const newArr = [...arr];
    for (let i = 0; i < newArr.length - 1; i++) {
      for (let j = 0; j < newArr.length - 1 - i; j++) {
        if (newArr[j] > newArr[j + 1]) {
          [newArr[j], newArr[j + 1]] = [newArr[j + 1], newArr[j]];
        }
      }
    }

    return newArr;
  }
}
function decendingSort(arr: string[], mutable: boolean = false): string[] {
  if (mutable) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] < arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }

    return arr;
  } else {
    const newArr = [...arr];
    for (let i = 0; i < newArr.length - 1; i++) {
      for (let j = 0; j < newArr.length - 1 - i; j++) {
        if (newArr[j] < newArr[j + 1]) {
          [newArr[j], newArr[j + 1]] = [newArr[j + 1], newArr[j]];
        }
      }
    }

    return newArr;
  }
}

console.log("original order", places);

const alphaSortedUnmutable: string[] = assendingSort(places);
console.log("alphabetical order without modifying the actual list", alphaSortedUnmutable);

console.log("still original order", places);

const alphaDecSortedUnmutable: string[] = decendingSort(places);
console.log(
  "alphabetical decending order without modifying the actual list",
  alphaDecSortedUnmutable
);

console.log("still original order", places);

places = places.reverse();
console.log("original order reversed", places);
places = places.reverse();
console.log("original order restored", places);
//////////////////////////////////////////
const alphaSortedMutable: string[] = assendingSort(places, true);
console.log("alphabetical order modifying the actual list", alphaSortedMutable);
console.log("original order disturbed: alphabetic", places);

const alphaDecSortedMutable: string[] = decendingSort(places, true);
console.log("alphabetical decending order modifying the actual list", alphaDecSortedMutable);
console.log("original order disturbed: reverse alphabetic", places);

export {};
