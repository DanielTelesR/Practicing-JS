// Using a for..of loop to iterate through an array.
var items = ["Car", "Shoe", "Soap", "Fan"];

for (let item of items) {
  console.log(`A ${item}.\n`);
}

// Creating a function to show the index of each element.
function showIndex(array) {
  let result = [];
  for (let i of array) {
    result.push(array.indexOf(i));
  }
  return result;
}

// Calling the function inside a `console.log` to display the
// index of each element.
console.log(showIndex(items));

// Creating a function to show if the array stores an specific
// element.

function showIndexOfElement(array, string) {
  let found = false;

  for (let j = 0; j < array.length; j++) {
    if (array[j] === string) {
      return `\n${string} is found at index ${j}!`;
      found = true;
    }
  }

  if (!found) {
    return `\n${string} is not in this array.`;
  }
}

// Calling the function inside a `console.log` to test
// if it works properly.
console.log(showIndexOfElement(items, "Boat"));




