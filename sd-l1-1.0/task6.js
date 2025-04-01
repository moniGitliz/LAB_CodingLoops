// Refer to Task 6 in your Instructions to complete this task

const prompt = require("prompt-sync")();

let numberOfLines = parseInt(prompt("Enter the number of lines to generate:"));
let results = [];

for (let i = 0; i <= numberOfLines; i++) {
    let output ="";

    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';
    if (i % 7 === 0) output += 'Woof';

    results.push(output||i);
  }

  console.table(results);