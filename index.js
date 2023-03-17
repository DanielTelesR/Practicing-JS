const users = [
  { name: "Craig", age: 25 },
  { name: "Carla", age: 42 },
  { name: "Joe", age: 17 },
  { name: "Samara", age: 20 }
];

const users2 = users.map(x => ({ name: x.name, birth: 2023 - x.age }));

users2.sort((a, b) => a.birth - b.birth);

for (let user of users2) {
  console.log(`${user.name} was born in ${user.birth}.\n`);
}

console.log("-".repeat(40));

