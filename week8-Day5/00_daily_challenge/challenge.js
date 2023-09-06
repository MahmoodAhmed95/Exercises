/*-----------------------------------------------------------------
Challenge: 24-isWinningTicket
Difficulty:  Intermediate
Prompt:
- Write a function called isWinningTicket that accepts a single array an as argument.
- The input array represents a 'lottery ticket' consisting of one or more nested 2-value arrays.  The first value of a nested array will be a string, the second an integer.
- The isWinningTicket function should return true if all of the nested arrays have a character in the string whose numeric character code equals the integer (2nd value).
- If any of the nested arrays have a string where all of the character's character code does not match the integer, then return false.
Hints:
- A character/string can be created from a character code using the String.fromCharCode() class method.
- A character within a string's character code can be obtained using the charCodeAt() string method.
Examples:
console.log(isWinningTicket( [ ['ABC', 65] ] )) // => true
console.log(isWinningTicket( [ ['ABC', 999], ['XY', 89] ] )) // => false
console.log(isWinningTicket( [ ['ABC', 66], ['dddd', 100], ['Hello', 108] ] )) // => true
console.log(isWinningTicket( [ ['ABC', 66], ['dddd', 15], ['Hello', 108] ] )) // => false
-----------------------------------------------------------------*/
// Your solution for 24-isWinningTicket here:
function isWinningTicket(arr) {
  // loop over the array
  for (let i = 0; i < arr.length; i++) {
    // save all the arrays in the index 0 that contain chars
    let charArr = arr[i][0];
    // save the number after the array
    let targetEl = arr[i][1];
    //set a checker equal false and change it in the condition
    let isEqual = false;
    // loop over the the chars array
    for (let j = 0; j < charArr.length; j++) {
      // check if the char equals the number element return true
      if (charArr.charCodeAt(j) === targetEl) {
        isEqual = true;
        break;
      }
    }
    // if there is one chars array not equal the number return false
    if (!isEqual) {
      return false;
    }
  }
  // if all conditions passed return true
  return true;
}
//
//
// tests
console.log(isWinningTicket([["ABC", 65]])); // => true
console.log(
  isWinningTicket([
    ["ABC", 999],
    ["XY", 89],
  ])
); // => false
console.log(
  isWinningTicket([
    ["ABC", 66],
    ["dddd", 100],
    ["Hello", 108],
  ])
); // => true
console.log(
  isWinningTicket([
    ["ABC", 66],
    ["dddd", 15],
    ["Hello", 108],
  ])
); // => false

module.exports = isWinningTicket;
