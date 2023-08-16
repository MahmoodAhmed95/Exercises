/*-----------------------------------------------------------------
Challenge: 22-intersection
Difficulty: Intermediate
Prompt:
- Write a function named intersection that accepts two arguments which are both arrays.  The array arguments may contain any mixture of strings, numbers and/or booleans - but no reference types, i.e., objects.
- The function should return a new array containing all elements in common, including repeating element values.
- The ordering of the elements in the returned is not important.
- If there are no elements in the arrays in common,  the intersection function should return an empty array.
- The function should not mutate (change) either argument.
Examples:
console.log(intersection(['a', 1], [true, 'a', 15])) //=> ['a']
console.log(intersection(['a', 1], [])) //=> []
console.log(intersection([1, 'a', true, 1, 1], [true, 1, 'b', 1])) //=> [1, true, 1]
-----------------------------------------------------------------*/
// Your solution for 22-intersection here:
function intersection(Arr1, Arr2) {
  // new array to add the intersection element
  let ArrInt = [];
  let ArrCopy = Arr1;
  // for loop to check all array one element
  for (let i = 0; i < Arr1.length; i++) {
    // if array two includes any element in array one add the element into intersection array
    if (Arr2.includes(Arr1[i]) && !ArrInt.includes(Arr1[i])) {
      ArrInt.push(Arr1[i]);
      // ArrCopy.(Arr1[i]);
    }
  }
  return ArrInt;
}
console.log(intersection(["a", 1], [true, "a", 15])); //=> ['a']
console.log(intersection(["a", 1], [])); //=> []
console.log(intersection([1, "a", true, 1, 1], [true, 1, "b", 1])); //=> [1, true, 1]
