const people = [ 
  'Daniel', 
  'Jamile', 
  'Carlos', 
  'Beca', 
  'Camila'];

const lastNames = people.map((person) => {
  return person + ' Santos';
});

console.log(lastNames.join(`\n`));

lastNames.includes('Daniel Santos') ? console.log('\nDaniel Santos is in the array') : console.log('I have never seen that person!');