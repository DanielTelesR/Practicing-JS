/*
I created an array of objects to store the names and ages of each student.
*/

const students = [
  { name: "Daniel", age: 25 },
  { name: "Carla", age: 42 },
  { name: "Joe", age: 17 },
  { name: "Samara", age: 20 }
]

/*
Next, I used the .map() method to iterate over each object in the array, creating a new array of objects that included each student's name and their corresponding date of birth.
*/

const students2 = students.map(x => ({ name: x.name, birth: 2023 - x.age }));

for (student of students2) {
  console.log(`\n${student.name} was born in ${student.birth}.\n`);
}

console.log("-".repeat(40));

/********************* Another example *********************/

const numbers = [1, 4, 6, 8, 10];

/* 
After storing some numbers in an array, I used the .map() method to create another array containing the corresponding double of each number.
*/

const double = numbers.map(num => num * 2);

console.log(`\n${numbers.join("-")}`);
console.log(`\nBelow, we can see the corresponding doubles of each number in the previously generated array: \n\n${double.join("-")}\n`);

console.log("-".repeat(40));

/********************* Another example *********************/

/*
I created an array of objects to store the names and two grades of each student.
*/
const grades = [
  { name: "Alvarez", grade1: 3, grade2: 7 },
  { name: "Joe", grade1: 6, grade2: 8 },
  { name: "Melyssa", grade1: 4, grade2: 10 },
  { name: "Clara", grade1: 6.5, grade2: 7 }
]

for (grade of grades) {
  console.log(`\nStudent: ${grade.name}\n1st Grade: ${grade.grade1}\n2nd Grade: ${grade.grade2}`);
}

/* Next, I used the .map method to create a new array containing the corresponding name and average of each student.*/

const averages = grades.map(x => ({ name: x.name, aver: (x.grade1 + x.grade2) / 2 }));

for (average of averages) {
  console.log(`\n${average.name} has an average of ${average.aver} points.\n`);
}
