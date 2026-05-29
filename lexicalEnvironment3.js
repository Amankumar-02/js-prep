// lexical environment contains:
// Local memory
// Reference to parent environment

// A Lexical Environment is the environment created for each execution context.
// It contains:
// local variables
// function declarations
// reference to outer environment
// lexical environment is the local memory along with the lexical environment of its parent local memory


let a = 10;

function one() {
   let b = 20;

   function two() {
      let c = 30; 
      console.log(a, b, c);
   }

   two();
}

one();

// Global Lexical Environment
// a -> 10
// one -> function
// outer -> null

// one() Lexical Environment
// b -> 20
// two -> function
// outer -> Global Environment

// two() Lexical Environment
// c -> 30
// outer -> one() Environment




// Lexical scope = where variables are accessible based on where functions are written

// Scope chain = the mechanism JavaScript uses to search for variables through nested scopes
// Scope chain is the chain of lexical environments