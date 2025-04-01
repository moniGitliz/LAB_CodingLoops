// Refer to Task 7 in your Instructions to complete this task

const prompt = require("prompt-sync")();

let numberOfLines = parseInt(prompt("Enter the number of lines to generate: "));
let results = [];
let primeIndex= 0;



let buzzWords = [
    "Fizz",
    "Buzz",
    "Woof",
    "Bark",
    "Awoo",
    "Bang"
  ];


  function isPrime(num){
  if (num <= 1) return false;  // 0 y 1 no son primos
  for (let i = 2; i <= Math.sqrt(num); i++) { //se verifica si num es divisible por cualquier número entre 2 y su raiz cuadrada.
    if (num % i === 0) return false;  // Si se puede dividir sin residuo, no es primo
  }
  return true;
  }
  
  for (let i = 1; i <= numberOfLines; i++) {
    let result = i;
    if (isPrime(i) && i % 2 !== 0) {
      result = buzzWords[primeIndex % buzzWords.length];  // Usamos el módulo para evitar desbordes
      primeIndex++; 
    }
    console.log(`${i}: ${result}`);

  }
