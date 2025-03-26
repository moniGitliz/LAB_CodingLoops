// Refer to Task 4 in your Instructions to complete this task

for (let i = 1; i <= 105; i++) {
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


