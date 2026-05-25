// execution context

function one() {
   two();
}

function two() {
   console.log("Two");
}

one();

// call stack
// two()
// one()
// GEC