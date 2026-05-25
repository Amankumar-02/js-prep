// A new execution context is created containing:

// Arguments object
// Local variables
// this
// Scope chain

var globalVar = "I am global";

function demo(a, b) {

    var localVar = "I am local";

    console.log(arguments); // Arguments Object // Stores all arguments passed to the function.

    console.log(this);  // undefined/window

    console.log(globalVar);

    console.log(a + b);
}

demo(10, 20);

// scope chain ->
// demo scope -> global scope


// JavaScript uses Lexical Scoping.
// Inner functions can access outer/global variables.
// scopeChaining ==> inner() accesses: local,outer,global

var a = `10 global variable`;

function outer() {
   var b = `20 outer variable`;

   function inner() {
    var c =  `30 local variable`;
      console.log(a);
      console.log(b);
      console.log(c);
   }

   inner();
}

outer();