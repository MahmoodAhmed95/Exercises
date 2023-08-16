/*-----------------------------------------------------------------
Challenge: 27-countTheBits
Difficulty:  Intermediate
Prompt:
- Write a function called countTheBits that accepts a single numeric argument that will be an integer.
- The function should return the number of bits that are set to 1 in the number's binary representation.
Hints:
- We typically work with "decimal" numbers on a daily basis. Decimal is "base 10", where there are 10 digits available - 0 thru 9.  However, it's binary that computers understand - 1's and 0's.  The 1's and 0's are called bits.
- As an example, the decimal value of 13 is represented in binary as 1101.  There are 3 one bits and 1 zero bit in the decimal number of 13.
- Carefully read the documentation for the Number.prototype.toString method.
Examples:
console.log(countTheBits( 0 )) // => 0
console.log(countTheBits( 13 )) // => 3
console.log(countTheBits( 256 )) // => 1
console.log(countTheBits( 255 )) //=> 8
console.log(countTheBits( 65535 ))  //=> 16
-----------------------------------------------------------------*/
// Your solution for 27-countTheBits here:
function countTheBits(num) {
  let count = 0;
  let bin = num.toString(2);

  for (let i = 0; i < bin.length; i++) {
    if (bin[i] === "1") {
      count += 1;
    }
  }
  return count;
}
console.log(countTheBits(0)); // => 0
console.log(countTheBits(13)); // => 3
console.log(countTheBits(256)); // => 1
console.log(countTheBits(255)); //=> 8
console.log(countTheBits(65535)); //=> 16
module.exports = countTheBits;
