// prototypes-example.js

// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Method added to the prototype
Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Another prototype method
Person.prototype.haveBirthday = function () {
    this.age++;
    console.log(`${this.name} is now ${this.age} years old.`);
};

// Create instances
const alice = new Person("Alice", 25);
const bob = new Person("Bob", 30);

alice.greet();
bob.greet();

alice.haveBirthday();

// Check prototype relationships
console.log(alice.__proto__ === Person.prototype); // true
console.log(Person.prototype.constructor === Person); // true

// ------------------------------------
// Prototype Inheritance Example
// ------------------------------------

function Student(name, age, course) {
    Person.call(this, name, age); // Call parent constructor
    this.course = course;
}

// Inherit from Person
Student.prototype = Object.create(Person.prototype);

// Restore constructor reference
Student.prototype.constructor = Student;

// Add Student-specific method
Student.prototype.study = function () {
    console.log(`${this.name} is studying ${this.course}.`);
};

const charlie = new Student("Charlie", 20, "JavaScript");

charlie.greet(); // inherited from Person.prototype
charlie.study();

console.log(charlie instanceof Student); // true
console.log(charlie instanceof Person);  // true

// ------------------------------------
// Prototype Chain Inspection
// ------------------------------------

console.log("Student prototype:", Student.prototype);
console.log("Person prototype:", Person.prototype);
console.log(
    "Prototype chain works:",
    Object.getPrototypeOf(charlie) === Student.prototype
);


// class
class Person2 {
    constructor(name) {
        this.name = name;
        this.say = function(){
            console.log("Say Hello " + this.greet() + " " + this.name)
            return this;
        }
    }
    greet() {
        // console.log(`Hi, I'm ${this.name}`);
        return `Hi, I'm ${this.name}`;
    }
}
var user10 = new Person2("Amir from class");
console.log(user10.name);
console.log(user10.greet())
// user10.say().greet()
user10.say()
// user10.say().greet()
console.log("break")
console.log(user10.say().greet())
// console.log(user10.say().name)