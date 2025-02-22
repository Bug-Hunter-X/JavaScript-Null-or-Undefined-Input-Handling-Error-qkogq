function foo(x) {
  if (x === null || x === undefined) {
    return 0; // Handle null and undefined cases
  } else if (typeof x !== 'object' || x.length === undefined) {
    return NaN; //handle cases where x is not an object or doesn't have length property 
  }
  return x.length; 
}