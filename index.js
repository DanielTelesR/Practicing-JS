/* I implemented arrays of objects for storing student and films data in the Age Rating Management System. */

const students = [
  { "name": "John", "age": "15" },
  { "name": "Martha", "age": "18" },
  { "name": "Messi", "age": "16" },
  { "name": "Ronaldo", "age": "19" }
];

const films = [
  { "title": "The Code", "rating": "12" },
  { "title": "Adult Life", "rating": "18" },
  { "title": "Crazy Fights", "rating": "16" }
];

/* I Implemented a check system using for loops to iterate over the two arrays of objects containing student and film data. */

/* The system compares the age of each student to the rating of each film, and outputs a message indicating whether the person can watch the film based on the comparison. If the age is lower than the rating, the system outputs a message saying that the person cannot watch the film. If the age is greater than or equal to the rating, the system outputs that the person can watch the film. */

for (let i = 0; i < students.length; i++) {

  for (let j = 0; j < films.length; j++) {

    (students[i].age < films[j].rating) ? console.log(`\n${students[i].name} can't watch ${films[j].title}\n`) : console.log(`\n${students[i].name} can watch ${films[j].title}\n`);
  }
}

