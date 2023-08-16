/*-----------------------------------------------------------------
Challenge: 21-primeFactors
Difficulty: Intermediate
Prompt:
Now that you have solved the last challenge of determining if a whole number is prime, let's expand upon that concept to...
- Write a function named primeFactors that accepts a whole number greater than one (1) as an argument and returns an array of that argument's prime factors.
- The prime factors of a whole number are the prime numbers that, when multiplied together, equals the whole number.
- If the argument provided is not greater than 1, or not a whole number, then primeFactors should return an empty array.
Examples:
console.log(primeFactors(2))//=> [2]
console.log(primeFactors(3))//=> [3]
console.log(primeFactors(4))//=> [2, 2]
console.log(primeFactors(18)) //=> [2, 3, 3]
console.log(primeFactors(29)) //=> [29]
console.log(primeFactors(105)) //=> [3, 5, 7]
console.log(primeFactors(200)) //=> [2, 2, 2, 5, 5]
Hint: Code a nested isPrime(n) helper function that returns true if n is prime, otherwise it returns false
-----------------------------------------------------------------*/
// Your solution for 21-primeFactors here:

// Pseudo code (Try without looking at this first)
// 1) Define function with one parameter n
// 2) Declare and initialize a new empty array [] called factors
// 3) Check if n is less than 2 or not a whole (integer) number (hint hint...can be googled)
// 4) Define inner function isPrime that takes in one number n and returns true if n (same name can be used again) is a prime
// 5) Declare and initialize a variable called prime and set it to 2 (smallest prime)
// 6) Start while loop. While !isPrime(n)
//  7) if n / prime is a whole number
//      8) Add prime factor to factor
//      9) Update n to n / 2
//  10) else
//  11) Find next prime to test (hint use while loop and ++)
// 12) End While loop
// 13) Add last remaining factor to factors
// 14) return factors
function primeFactors(n) {
  let factors = [];
  if (n < 2 || !Number.isInteger(n)) {
    return [];
  }
  function isPrime(num) {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  let prime = 2;
  while (!isPrime(n)) {
    if (n % prime === 0) {
      factors.push(prime);
      n = n / prime;
    } else {
      prime++;
    }
  }
  factors.push(n);
  return factors;
}

console.log(primeFactors(2)); //=> [2]
console.log(primeFactors(3)); //=> [3]
console.log(primeFactors(4)); //=> [2, 2]
console.log(primeFactors(18)); //=> [2, 3, 3]
console.log(primeFactors(29)); //=> [29]
console.log(primeFactors(105)); //=> [3, 5, 7]
console.log(primeFactors(200)); //=> [2, 2, 2, 5, 5]
