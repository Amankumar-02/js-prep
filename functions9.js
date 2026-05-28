// =====================================================
// 4. FUNCTIONS
// =====================================================

// Simple function
function greet() {
    console.log("Hello, Welcome to JavaScript!");
}

greet();


// Function with parameters
function add(a, b) {
    return a + b;
}

let result = add(10, 20);
console.log("Addition Result:", result);


// Arrow Function (Modern JavaScript)
const multiply = (x, y) => {
    return x * y;
};

console.log("Multiplication Result:", multiply(5, 4));


// =====================================================
// EXTRA PRACTICE EXAMPLES
// =====================================================

// Check even or odd
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        console.log(number + " is Even");
    } else {
        console.log(number + " is Odd");
    }
}

checkEvenOdd(7);


// Find largest number
function findLargest(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log("Largest Number:", findLargest(15, 9));


// Array loop example
let numbers = [10, 20, 30, 40];

numbers.forEach(function(num) {
    console.log("Array Value:", num);
});

console.log("JavaScript Preparation Completed!");





// function declaration
function one(){
    console.log("function declaration");
};
one();


// function expression
var two = function(){
    console.log("function expression");
};
two();


// arrow function
var three = ()=>{
    console.log("arrow function");
};
three();


// Named Function Expression
const four = function hello() {
    console.log("Named Function Expression");
};
four();


// iife
(function(){console.log("iife")})();


// iife arrow
(()=>{console.log("iife arrow")})();


// constructor function  ==> Usually starts with a capital letter:
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
        console.log(`Hi, I'm ${this.name}`);
    };
}
const user = new Person("Rahul", 55);
console.log(user.name + " " + user.age);
user.greet();


// class method
class Person2 {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hi, I'm ${this.name}`);
    }
}
var user10 = new Person2("Amir from class");
console.log(user10.name);
user10.greet()


//Factory Function
function createPerson(name, age) {
    return {
        name,
        age,
        greet() {
            console.log(`Hi, I'm ${name}`);
        }
    };
}
const user1 = createPerson("Rahul", 22);
const user2 = createPerson("Abhay", 55);
user1.greet();
console.log(user2.name);


// Method Function (inside objects)
const obj = {
    greet : () => {
        console.log("greet");
    },
    hello(){
        console.log("hello")
    },
    world : function(){
        console.log("world");
    }
};
obj.greet();
obj.hello();
obj.world();


// Async Function
async function data() {
    setTimeout(() => {
        console.log("5 sec passed");
    }, 5000);
    await new Promise((resolve) => {
        console.log("promise")
        resolve();
    });
    console.log("data");
}
data();
async function data22() {
    setTimeout(() => {
        console.log("5 sec passed22");
    }, 5000);
    await new Promise((resolve) => {
        console.log("promise22")
        resolve();
    });
    console.log("data22");
}
data22();
async function data33() {
    setTimeout(() => {
        console.log("5 sec passed33");
    }, 5000);
    await new Promise((resolve) => {
        console.log("promise33")
        resolve();
    });
    console.log("data33");
}
data33();
const fetchData = async () => {
    return "done";
};
fetchData();
console.log("end")

