const fs = require('fs');

fs.readFile('./users.json', 'utf-8', (err, data) => {
  const json = JSON.parse(data);
  console.log(json);
})