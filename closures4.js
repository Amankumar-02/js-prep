// A closure occurs when a function remembers local variables with lexical environment from outer scope even after outer function finishes.

function outerFunction() {
  let count = 0;

  function innerFunction() {
    count++;
    console.log(`Counter: ${count}`);
  };
  count = 2;
  return innerFunction;
}

const counter = outerFunction(); // here outerFunction() is executed and popped from call stack

counter(); // Counter: 3
counter(); // Counter: 4
counter(); // Counter: 5


// Uses of Closures:

// Module Design Pattern // hiding or capsuling variable
function counter2() {
    let count = 0;

    return {
        increment: function() {
            count++;
            console.log(count);
        },

        decrement: function() {
            count--;
            console.log(count);
        }
    };
}

const c = counter2();
c.increment();
c.increment();
c.decrement();
const d = counter2();
d.increment();
d.increment();
d.decrement();

// constructor function
function Counter3(){
  var count11 = 0;
  this.increment = function(){
    count11++;
    console.log(count11);
  }
  this.decrement = function(){
    count11--;
    console.log(count11);
  }
}
var counter11 = new Counter3();
counter11.increment();
counter11.increment();
counter11.decrement();


// Currying
function multiply(a) {
    return function(b) {
        return a * b;
    };
}

const double = multiply(2);

console.log(double(5));

// Functions like once
function once(fn) {
    let called = false;

    return function() {
        if (!called) {
            called = true;
            fn();
        }
    };
}

const hello = once(() => {
    console.log("Hello");
});

hello();
hello();
hello();

// memoize
function memoize(fn) {
    let cache = {};

    return function(num) {
        if (cache[num]) {
            console.log("From cache");
            return cache[num];
        }

        let result = fn(num);
        cache[num] = result;

        return result;
    };
}

const square = memoize((n) => n * n);

console.log(square(4));
console.log(square(4));
console.log(square(5));
console.log(square(5));

// maintaining state in async world
function outer() {
    let message = "Hello";

    setTimeout(() => {
        console.log(message);
    }, 1000);
}

outer();

// setTimeouts
// more setTimeout + closures
function x (){
  for(let i = 1; i <=5; i++){
    setTimeout(()=>{
      console.log(i);
    }, i*1000)
  }
};
// x(); // 12345
function x2 (){
  var i;
  for(i = 1; i <=5; i++){
    setTimeout(()=>{
      console.log(i);
    }, i*1000)
  }
};
// x2(); // 66666
function x3 (){
  for(var i = 1; i <=5; i++){
    function close (newi) {
      setTimeout(()=>{
        console.log(newi);
      }, newi *1000)
      }
      close(i);
  }
};
x3(); // 12345

// Iterators
function createIterator(arr) {
    let index = 0;

    return function() {
        if(index < arr.length) {
            return arr[index++];
        }

        return null;
    };
}

const next = createIterator([10, 20, 30]);

console.log(next());
console.log(next());
console.log(next());
console.log(next());

