// OPTIONAL Challenge: 28-unComify
// Difficulty:  Intermediate

// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

// Examples
// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL
function unComify(str) {
  let arr = str.split(",").slice(1, -1);
  if (arr == "") {
    return null;
  }
  return arr.join(" ");
}
console.log(unComify("")); //=>  NULL
console.log(unComify("1")); //=>  NULL
console.log(unComify("1,2")); //=>  NULL
console.log(unComify("apple,banana")); //=> NULL
console.log(unComify("1,2,3")); //=>  "2"
console.log(unComify("1,2,3,4")); //=>  "2 3"
console.log(unComify("1,2,3,4,5")); //=>  "2 3 4"
// module.exports = unComify;
/*-----------------------------OPTIONAL------------------------------------
OPTIONAL Challenge: 28-gridTrip
Difficulty:  Intermediate
Prompt:
- This challenge uses an imaginary grid where the x coordinate increases when you move 'up' and decreases when you move 'down'.  Similarly, the y coordinate increases when you move 'right' and decreases when you move 'left'.
- Write a function called gridTrip that accepts two arguments.
- The first argument is an array containing two integers.  The first represents the starting x position on the grid.  The second integer in the array represents the starting y position.
- The second argument is a string representing "moves" using the characters 'U', 'D', 'R' & 'L' to represent moving Up, Down, Right & Left respectively.  Each direction character will be followed by digits representing how many units to move in that direction.  For example, a string of 'D15R2U4' represents moving up 15 units, to the right 2 units, and finally, down 4 units.  The direction characters will always be upper case.
- The gridTrip function should return a new array of two integers: the final x position and the final y position.  Do not modify the array argument).
Hint:
- Using the String.match method to return an array of regular expression matches can be helpful if you want to break the single string of moves into an array of distinct moves by direction.  Be sure to use the global flag, e.g. /cat/g, when defining the regexp.
Examples:
console.log(gridTrip( [0, 0], 'U2R1' )) // => [2, 1]
console.log(gridTrip( [5, 10], 'D5L15U2' )) //-> [2, -5]
console.log(gridTrip( [-22, 100], 'L2L15D50U1D9')) //=> [-80, 83]
-----------------------------------------------------------------*/
// Your solution for 28-gridTrip here:
function gridTrip(arr, str) {
  let [x, y] = arr;
  const moves = str.match(/[UDLR]\d+/g) || [];

  for (const move of moves) {
    const [charDir, distNum] = [move[0], move.slice(1)];
    const moving = parseInt(distNum);

    if (charDir === "U") {
      x += moving;
    } else if (charDir === "D") {
      x -= moving;
    } else if (charDir === "R") {
      y += moving;
    } else if (charDir === "L") {
      y -= moving;
    }
  }

  return [x, y];
}
console.log(gridTrip([0, 0], "U2R1")); // => [2, 1]
console.log(gridTrip([5, 10], "D5L15U2")); //-> [2, -5]
console.log(gridTrip([-22, 100], "L2L15D50U1D9")); //=> [-80, 83]
module.exports = {
  gridTrip,
  unComify,
};
