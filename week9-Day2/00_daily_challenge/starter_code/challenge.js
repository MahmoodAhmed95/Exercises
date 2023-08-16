/*-----------------------------------------------------------------
Challenge: 26-toCamelCase
Difficulty:  Intermediate
Prompt:
- Write a function called toCamelCase that accepts a single string as argument.
- The toCamelCase function should return the string as camel-cased, removing each _ or - characters and capitalizing the character following the _ or -.
Hints:
- This is a great challenge for using regular expressions combined with the String.replace method.
Examples:
console.log(toCamelCase( 'wdi-rocks' )) // => 'wdiRocks'
console.log(toCamelCase( 'banana_Turkey_potato' )) // => 'bananaTurkeyPotato'
console.log(toCamelCase( 'Mama-mia' )) // => 'MamaMia'
console.log(toCamelCase( 'A_b_c' )) // => 'ABC'
-----------------------------------------------------------------*/
// Your solution for 26-toCamelCase here:
function toCamelCase(str) {
  // [-_] remove "-" & "_" (.) select the removed index g means global to check any one matchs
  let strNew = str.replace(/[-_](.)/g, (indexOfReplaced, charToUpper) =>
    charToUpper.toUpperCase()
  );
  // return the new string after the changes on it
  return strNew;
}
console.log(toCamelCase("wdi-rocks")); // => 'wdiRocks'
console.log(toCamelCase("banana_Turkey_potato")); // => 'bananaTurkeyPotato'
console.log(toCamelCase("Mama-mia")); // => 'MamaMia'
console.log(toCamelCase("A_b_c")); // => 'ABC'
module.exports = toCamelCase;
