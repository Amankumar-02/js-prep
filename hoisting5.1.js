// Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top of their scope during the compilation phase—before the code actually runs.

// It doesn’t literally “move” code in your file, but JavaScript internally processes declarations first, so you can sometimes use variables or functions before they’re declared.

// var x = 5;  // here x is not defined
one();  // function Oneundefined
console.log(x); // var=undefinded, let/const=referenceError
console.log(one); // var=undefinded, let/const=referenceError

var x = 5;
// let x = 5;
// const a = 5;

function one(a){
    console.log("function One" + x );
}

// with arrow function
// got error == two is not a function

two();
console.log(two);

var two = ()=>{
    console.log("two");
}



// There are mainly four cases:
// 1. undefined
// 2. ReferenceError: variable is not defined
// 3. ReferenceError: cannot access before initialization
// 4. TypeError: ... is not a function