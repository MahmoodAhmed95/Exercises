/*-----------------------------------------------------------------
Challenge: 23-balancedBrackets
Difficulty:  Intermediate
Prompt:
- Write a function called balancedBrackets that accepts a single string as argument.
- The input string is composed entirely of parentheses, brackets and/or curly braces, i.e.,  (), [] and/or {}. Referred to as "braces" from this point forward...
- The balancedBraces function should return true if the string's braces are "balanced" and false if they are not.
- The brackets are considered unbalanced if any closing bracket does not close the same type of opening bracket, ignoring already matched brackets between them.  Examples explain it best...
Examples:
console.log(balancedBrackets( '()' )) // => true
console.log(balancedBrackets( '(]' )) // => false
console.log(balancedBrackets( '[{}]' )) // => true
console.log(balancedBrackets( '[(])' )) // => false
console.log(balancedBrackets( '[({}[])]' )) // => true
-----------------------------------------------------------------*/
// Your solution for 23-balancedBrackets here:
function balancedBrackets(str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const newStack = str[i];

    if (newStack === "(" || newStack === "[" || newStack === "{") {
      stack.push(newStack);
    } else if (newStack === ")" || newStack === "]" || newStack === "}") {
      if (stack.length === 0) {
        return false;
      }

      const lastElement = stack.pop();

      if (
        (lastElement !== "(" && newStack === ")") ||
        (lastElement !== "[" && newStack === "]") ||
        (lastElement !== "{" && newStack === "}")
      ) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

module.exports = balancedBrackets;
console.log(balancedBrackets("()")); // => true
console.log(balancedBrackets("(]")); // => false
console.log(balancedBrackets("[{}]")); // => true
console.log(balancedBrackets("[(])")); // => false
console.log(balancedBrackets("[({}[])]")); // => true
