// Refer to Task 3 in your Instructions to complete this task

let i = Number

for (let i = 1; i < 106; i++) {

  if (i%15 == 0){
    console.log ('FizzBuzz');
  } else if (i%3 == 0){
    console.log ('Fizz');
  } else if (i%5 == 0){
    console.log ('Buzz');
  } else {
    console.log(i)
  };
};