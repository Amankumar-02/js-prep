function flattenArray(arr) {
  // Your implementation
  let result = [];
   for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result.push(...flattenArray(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

//For the purpose of user debugging.
console.log(flattenArray([1, [2, [3, 4], 5], 6]));
