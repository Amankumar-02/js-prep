// A closure occurs when a function remembers variables from outer scope even after outer function finishes

function outerFunction() {
  let count = 0;

  return function innerFunction() {
    count++;
    console.log(`Counter: ${count}`);
  };
}

const counter = outerFunction(); // here outerFunction() is executed and popped from call stack

counter(); // Counter: 1
counter(); // Counter: 2
counter(); // Counter: 3

