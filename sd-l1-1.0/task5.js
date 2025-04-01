// Refer to Task 5 in your Instructions to complete this task
const prompt = require("prompt-sync")();

let numberOfLines = parseInt(prompt("Enter the number of lines to generate:"));

for (let i = 1; i <= numberOfLines; i++) {
  let output = '';

  if (i % 3 === 0) output += 'Fizz';
  if (i % 5 === 0) output += 'Buzz';
  if (i % 7 === 0) output += 'Woof';

  if (output !== '') {
    console.log(output); // Si hay algo en output, lo muestra
  } else {
    console.log(i); // Si no hay nada en output, muestra el número
  }
};


