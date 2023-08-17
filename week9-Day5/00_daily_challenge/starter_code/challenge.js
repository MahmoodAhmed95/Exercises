/*-----------------------------------------------------------------
Challenge: 29-addChecker
Difficulty:  Intermediate
Prompt:
- Write a function called addChecker that accepts two arguments.
- The first argument is an array containing at least two integers.  The integers in the array are sorted in ascending order.
- The second argument is an integer.
- The addChecker function should return true if there are two integers in the array of integers (first argument) that when added together, equals the integer passed in as the second argument.
- If there are no two integers in the array that sum up to equal the second argument, addChecker should return false.
Hint:
- An efficient solution can leverage the the fact that the integers in the array are sorted.
Examples:
console.log(addChecker( [1, 2], 3 )) // => true
console.log(addChecker( [-3, 2], 9 )) // => false
console.log(addChecker( [10, 15, 16, 22], 32 )) // => true
console.log(addChecker( [10, 15, 16, 22], 19 )) // => false
-----------------------------------------------------------------*/
// Your solution for 29-addChecker here:
function addChecker(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === num) {
        return true;
      }
    }
  }
  return false;
}
// function addChecker(array, number) {
//   return array.some((current, index) =>
//     array.slice(index + 1).some((next) => current + next === number)
//   );
// }

console.log(addChecker([1, 2], 3)); // => true
console.log(addChecker([-3, 2], 9)); // => false
console.log(addChecker([10, 15, 16, 22], 32)); // => true
console.log(addChecker([10, 15, 16, 22], 19)); // => false
module.exports = addChecker;
