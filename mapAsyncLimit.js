//The question asks you to implement an async version of map() that processes items in parallel, but never allows more than limit async operations to run simultaneously, while preserving the original result order.

// Why do companies ask this?

// This pattern is very common in real systems:

// API calls
// users.map(user =>
//   fetch(`/profile/${user.id}`)
// )

// If there are 10,000 users:

// Promise.all(...)

// would create 10,000 requests instantly.

// Instead:

// limit = 5

// Only 5 requests run at a time.


async function mapAsyncLimit(arr, limit, asyncFn) {
  if (!Array.isArray(arr)) {
    throw new TypeError("arr must be an array");
  }
  if (limit < 1) {
    throw new Error("limit must be >= 1");
  }
  const results = new Array(arr.length);
  let nextIndex = 0;
  async function worker() {
    while (true) {
      const currentIndex = nextIndex++;
      if (currentIndex >= arr.length) {
        return;
      }
      results[currentIndex] = await Promise.resolve(
        asyncFn(arr[currentIndex], currentIndex, arr),
      );
    }
  }
  const workers = Array(Math.min(limit, arr.length)).fill(null).map(worker);
  await Promise.all(workers);
  return results;
}

// Example
const delayFn = (x, y, z) => {
    console.log(x,y,z)
    return new Promise((resolve) => setTimeout(() => resolve(x * 2), 100));
}

let arr = [1, 2, 3, 4];
let limit = 2;
mapAsyncLimit(arr, limit, delayFn).then(console.log); // [2, 4, 6, 8]

// mapAsyncLimit(arr, limit, delayFn);
// console.log(mapAsyncLimit(arr, limit, delayFn)); // [2,4,6,8]

// module.exports = mapAsyncLimit
