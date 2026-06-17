/******************************************************************************************
 * JAVASCRIPT PROMISES + ASYNC/AWAIT + TRY/CATCH
 * COMPLETE GUIDE (LOW LEVEL TO ADVANCED)
 *
 * Read this file from top to bottom.
 * Every section builds on the previous one.
 ******************************************************************************************/

/******************************************************************************************
 * 1. WHY DO WE NEED PROMISES?
 ******************************************************************************************/

/*
JavaScript is single-threaded.

When some operations take time, such as:
- API calls
- Database operations
- Reading files
- Timers

JavaScript should not stop the entire application while waiting.

Example:
*/

console.log("Start");

setTimeout(() => {
  console.log("Finished after 2 seconds");
}, 2000);

console.log("End");

/*
Output:
Start
End
Finished after 2 seconds

The timeout runs asynchronously.
*/


/******************************************************************************************
 * 2. THE CALLBACK APPROACH
 ******************************************************************************************/

function getUser(callback) {
  setTimeout(() => {
    callback({
      id: 1,
      name: "Rahul"
    });
  }, 1000);
}

getUser((user) => {
  console.log("User:", user);
});

/*
Callbacks work but become difficult when multiple async tasks depend on each other.

This leads to Callback Hell.
*/


/******************************************************************************************
 * 3. CALLBACK HELL
 ******************************************************************************************/

function getUserData(callback) {
  setTimeout(() => {
    callback({ id: 1 });
  }, 1000);
}

function getOrders(userId, callback) {
  setTimeout(() => {
    callback(["Order1", "Order2"]);
  }, 1000);
}

function getPayment(orderId, callback) {
  setTimeout(() => {
    callback("Payment Success");
  }, 1000);
}

getUserData((user) => {
  getOrders(user.id, (orders) => {
    getPayment(orders[0], (payment) => {
      console.log(payment);
    });
  });
});

/*
Nested callbacks become hard to:
- Read
- Maintain
- Debug

Promises solve this.
*/


/******************************************************************************************
 * 4. WHAT IS A PROMISE?
 ******************************************************************************************/

/*
A Promise is an object representing the eventual completion
or failure of an asynchronous operation.

Promise States:

1. Pending
2. Fulfilled (Resolved)
3. Rejected

          Pending
         /       \
   Resolved     Rejected
*/


/******************************************************************************************
 * 5. CREATING YOUR FIRST PROMISE
 ******************************************************************************************/

const promiseExample = new Promise((resolve, reject) => {

  let success = true;

  if (success) {
    resolve("Operation Successful");
  } else {
    reject("Operation Failed");
  }
});

console.log(promiseExample);


/******************************************************************************************
 * 6. CONSUMING A PROMISE USING .then() AND .catch()
 ******************************************************************************************/

promiseExample
  .then((result) => {
    console.log("Success:", result);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

/*
then() -> handles success
catch() -> handles failure
*/


/******************************************************************************************
 * 7. REALISTIC PROMISE EXAMPLE
 ******************************************************************************************/

function fetchUser() {
  return new Promise((resolve, reject) => {

    setTimeout(() => {

      resolve({
        id: 1,
        name: "Rahul"
      });

    }, 2000);

  });
}

fetchUser()
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.log(error);
  });


/******************************************************************************************
 * 8. CHAINING PROMISES
 ******************************************************************************************/

function getUser() {
  return Promise.resolve({
    id: 1,
    name: "Rahul"
  });
}

function getOrders(userId) {
  return Promise.resolve([
    "Laptop",
    "Phone"
  ]);
}

function getPayment() {
  return Promise.resolve("Paid");
}

getUser()
  .then((user) => {
    console.log(user);

    return getOrders(user.id);
  })
  .then((orders) => {
    console.log(orders);

    return getPayment();
  })
  .then((payment) => {
    console.log(payment);
  })
  .catch((error) => {
    console.log(error);
  });

/*
Each then() returns a new Promise.
*/


/******************************************************************************************
 * 9. REJECTING A PROMISE
 ******************************************************************************************/

function loginUser(isValid) {

  return new Promise((resolve, reject) => {

    if (isValid) {
      resolve("Login Success");
    } else {
      reject("Invalid Credentials");
    }

  });

}

loginUser(false)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));


/******************************************************************************************
 * 10. FINALLY()
 ******************************************************************************************/

loginUser(true)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Always Runs");
  });

/*
finally() runs regardless of success/failure.
*/


/******************************************************************************************
 * 11. PROMISE STATIC METHODS
 ******************************************************************************************/

/******************************************************************************************
 * Promise.resolve()
 ******************************************************************************************/

Promise.resolve("Immediate Success")
  .then(console.log);

/******************************************************************************************
 * Promise.reject()
 ******************************************************************************************/

Promise.reject("Immediate Error")
  .catch(console.log);


/******************************************************************************************
 * 12. Promise.all()
 ******************************************************************************************/

const p1 = Promise.resolve("A");
const p2 = Promise.resolve("B");
const p3 = Promise.resolve("C");

Promise.all([p1, p2, p3])
  .then((result) => {
    console.log(result);
  });

/*
Output:
["A","B","C"]

Fails if ANY promise fails.
*/


/******************************************************************************************
 * 13. Promise.allSettled()
 ******************************************************************************************/

const successPromise = Promise.resolve("Success");

const failedPromise = Promise.reject("Failed");

Promise.allSettled([
  successPromise,
  failedPromise
])
.then((result) => {
  console.log(result);
});

/*
Returns status of every promise.
*/


/******************************************************************************************
 * 14. Promise.race()
 ******************************************************************************************/

const fast = new Promise((resolve) => {
  setTimeout(() => resolve("Fast"), 1000);
});

const slow = new Promise((resolve) => {
  setTimeout(() => resolve("Slow"), 3000);
});

Promise.race([fast, slow])
  .then(console.log);

/*
Output:
Fast
*/


/******************************************************************************************
 * 15. Promise.any()
 ******************************************************************************************/

const fail1 = Promise.reject("Fail1");
const fail2 = Promise.reject("Fail2");

const success1 = Promise.resolve("Winner");

Promise.any([
  fail1,
  fail2,
  success1
])
.then(console.log);

/*
Returns first successful promise.
*/


/******************************************************************************************
 * 16. INTRODUCTION TO ASYNC/AWAIT
 ******************************************************************************************/

/*
Async/Await is syntax sugar over Promises.

Makes asynchronous code look synchronous.
*/


/******************************************************************************************
 * 17. async FUNCTION
 ******************************************************************************************/

async function simpleExample() {
  return "Hello";
}

simpleExample()
  .then(console.log);

/*
Async functions ALWAYS return a Promise.
*/


/******************************************************************************************
 * 18. await KEYWORD
 ******************************************************************************************/

function getProfile() {

  return new Promise((resolve) => {

    setTimeout(() => {
      resolve("Profile Data");
    }, 2000);

  });

}

async function displayProfile() {

  const data = await getProfile();

  console.log(data);

}

displayProfile();

/*
await pauses execution INSIDE async function.
*/


/******************************************************************************************
 * 19. PROMISE CHAIN VS ASYNC/AWAIT
 ******************************************************************************************/

/*
Promise Chain:
*/

getUser()
  .then((user) => getOrders(user.id))
  .then((orders) => console.log(orders));

/*
Async Await:
*/

async function processUser() {

  const user = await getUser();

  const orders = await getOrders(user.id);

  console.log(orders);

}

processUser();


/******************************************************************************************
 * 20. TRY/CATCH WITH ASYNC AWAIT
 ******************************************************************************************/

function fetchData(success = true) {

  return new Promise((resolve, reject) => {

    setTimeout(() => {

      if (success) {
        resolve("Data Received");
      } else {
        reject("Network Error");
      }

    }, 1000);

  });

}

async function getData() {

  try {

    const result = await fetchData(true);

    console.log(result);

  } catch (error) {

    console.log("Caught Error:", error);

  }

}

getData();


/******************************************************************************************
 * 21. MULTIPLE AWAITS
 ******************************************************************************************/

async function multipleRequests() {

  try {

    const user = await getUser();

    const orders = await getOrders(user.id);

    const payment = await getPayment();

    console.log(user);
    console.log(orders);
    console.log(payment);

  } catch (error) {

    console.log(error);

  }

}

multipleRequests();


/******************************************************************************************
 * 22. PARALLEL EXECUTION USING Promise.all()
 ******************************************************************************************/

function getPosts() {
  return Promise.resolve(["Post1", "Post2"]);
}

function getComments() {
  return Promise.resolve(["Comment1"]);
}

async function loadDashboard() {

  const [posts, comments] =
    await Promise.all([
      getPosts(),
      getComments()
    ]);

  console.log(posts);
  console.log(comments);

}

loadDashboard();

/*
Faster because requests run simultaneously.
*/


/******************************************************************************************
 * 23. ERROR PROPAGATION
 ******************************************************************************************/

async function testError() {

  throw new Error("Something Went Wrong");

}

testError()
  .catch((error) => {
    console.log(error.message);
  });


/******************************************************************************************
 * 24. CUSTOM DELAY FUNCTION
 ******************************************************************************************/

function delay(ms) {

  return new Promise((resolve) => {

    setTimeout(resolve, ms);

  });

}

async function demoDelay() {

  console.log("Start");

  await delay(2000);

  console.log("After 2 Seconds");

}

demoDelay();


/******************************************************************************************
 * 25. ADVANCED EXAMPLE - RETRY MECHANISM
 ******************************************************************************************/

let attempt = 0;

function unstableApi() {

  return new Promise((resolve, reject) => {

    attempt++;

    if (attempt < 3) {
      reject("Server Error");
    } else {
      resolve("Success");
    }

  });

}

async function retryApi() {

  for (let i = 0; i < 3; i++) {

    try {

      const result = await unstableApi();

      console.log(result);

      return;

    } catch (error) {

      console.log("Retrying...");

    }

  }

}

retryApi();


/******************************************************************************************
 * 26. COMMON INTERVIEW QUESTIONS
 ******************************************************************************************/

/*
Q1: Does async function return Promise?
Answer:
Yes.

Q2: Can await be used outside async?
Answer:
No (except top-level await in modules).

Q3: Difference between then() and await?
Answer:
Both work with Promises.
await provides cleaner syntax.

Q4: Does finally receive result/error?
Answer:
No.

Q5: Does Promise.all run sequentially?
Answer:
No.
Runs concurrently.
*/


/******************************************************************************************
 * REAL WORLD USE CASES
 ******************************************************************************************/

/*
1. FETCH DATA FROM API
*/

async function getUsers() {

  try {

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    const users = await response.json();

    console.log(users);

  } catch (error) {

    console.log(error);

  }

}


/*
2. USER LOGIN
*/

async function