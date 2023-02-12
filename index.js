const prompt = require('prompt-sync')();

// I created variables to store information;
const brands = ["Nike", "Adidas", "Puma", "Vans"];
const disliked = [];
const fav_Brand = prompt(`Please, indicate your favorite brand: `)

/*I constructed a function to verify the user's preferences and return the brands that are disliked.*/
function dislike(array) {
  for (let i = 0; i < array.length; i++) {
    let answer = prompt(`\nDo you like ${array[i]}? (Y or N): `);
    if (answer == 'N') {
      console.log(`\nGot it. You don't like ${array[i]}.\n`);
      disliked.push(array[i]);
    } else {
      console.log(`\nGlad to hear that!\n`);
    }
  }
  return (`You dont like these brands: ${disliked}\n`);
}

/*I created another function to determine whether the user's preferred brand is on the list of "disliked" brands. If it is, the function outputs that this does not make sense. Otherwise, it declares that everything is okay.*/

function brand_FindIndex(array, variable) {
  array.includes(variable) ? console.log(`${variable} has been found in the list!\n`) : `${variable} is not in the list\n`;
  if (array.includes(variable)) {
    return `This doesn't make any sense, since you said ${fav_Brand} is your favorite brand.`
  }
  return `All is right in the Universe.`
}

// Output the results to the user
console.log(dislike(brands));
console.log(brand_FindIndex(disliked, fav_Brand));

