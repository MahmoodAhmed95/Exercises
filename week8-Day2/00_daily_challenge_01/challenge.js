/*-----------------------------------------------------------------
Challenge: 20-isPrime
Difficulty: Intermediate
Prompt:
- Write a function named isPrime that returns true when the integer argument passed to it is a prime number and false when the argument passed to it is not prime.
- A prime number is a whole number (integer) greater than 1 that is evenly divisible by only itself.
Examples:
console.log(isPrime(2)) //=> true
console.log(isPrime(3)) //=> true 
console.log(isPrime(4)) //=> false
console.log(isPrime(29)) //=> true
console.log(isPrime(200)) //=> false
-----------------------------------------------------------------*/
// Your solution for 20-isPrime here:
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    let sum = n / i;
    if (Number.isInteger(sum)) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(2)); //=> true
console.log(isPrime(3)); //=> true
console.log(isPrime(4)); //=> false
console.log(isPrime(29)); //=> true
console.log(isPrime(200)); //=> false
console.log(isPrime(15)); //=> false
console.log(isPrime(4913)); //=> false
console.log(isPrime(2197)); //=> false
console.log(isPrime(2147483579)); //=> true
console.log(isPrime(7907)); //=> true
