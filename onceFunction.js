function once(fn) {
  let called = false;
  let result;

  return function (...args) {
    // console.log(args)
    if (!called) {
      try {
        result = fn.apply(this, args);
        called = true;
      } catch (error) {
        throw error;
      }
    }

    return result;
  };
}


function add (a,b){
    return a+b;
}
const onceAdd = once(add);

console.log(onceAdd(2,3));
console.log(onceAdd(4,5));
console.log(onceAdd(10,20));

 

function greet(){
    return "Hello World!";
};
const onceGreet = once(greet);
console.log(onceGreet());
console.log(onceGreet());
console.log(onceGreet());



function doNothing(){
    return undefined;
}
const onceDoNothing = once(doNothing);
console.log(onceDoNothing());
console.log(onceDoNothing());



async function fetchData() {
    console.log("Fetching....");
    return "Data";
};
const onceFetch = once(fetchData);
// onceFetch().then(console.log);
// onceFetch().then(console.log);

const user = {
  name: "Rahul",
  sayHello(greeting) {
    return `${greeting}, ${this.name}`;
  }
};
// add a new key value function inside user object
user.sayHelloOnce = once(user.sayHello);
console.log(user.sayHelloOnce("Hi"));
console.log(user.sayHelloOnce("Hello"));





// currying method

function curry(fn) {
    // Your implementation
    return function curried(...args) {
        console.log(args)
        if (args.length >= fn.length) {
            return fn(...args);
        }
        return function (...nextArgs) {
            console.log("next", ...nextArgs)
            return curried(...args, ...nextArgs);
        }
    };
}

//For the purpose of user debugging.
//pass appropriate input in below function call

function sum(a, b, c) {
    return a + b + c;
};
const curriedSum = curry(sum);
// console.log(curriedSum(1)(2)(3));     // 6
let xx = curriedSum(1);
// console.log(xx);
console.log("break")
let yy = xx(2);
// console.log(yy);
console.log("break")
let zz = yy(3);
// console.log(zz);
console.log("break")
// console.log(curriedSum(1))
// console.log(curriedSum(1, 2)(3));     // 6
// console.log(curriedSum(1)(2, 3));     // 6
// console.log(curriedSum(1, 2, 3));     // 6
