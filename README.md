# JavaScript Null or Undefined Input Handling
This example demonstrates a common error in JavaScript when dealing with functions that might receive null or undefined values as input.  The `foo` function attempts to access the `length` property of the input `x`, which will throw a TypeError if `x` is null or undefined.  The solution showcases proper null and undefined checks before accessing properties.

## Bug
The `bug.js` file contains the function with the error, showing how it fails when given a null or undefined value.

## Solution
The `bugSolution.js` file provides a corrected function that includes checks for null and undefined inputs, preventing the TypeError.