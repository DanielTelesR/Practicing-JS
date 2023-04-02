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