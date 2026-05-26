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
