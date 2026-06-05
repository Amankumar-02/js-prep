// inheritance-examples.js

console.log("=== JavaScript Inheritance Examples ===\n");

/* ==========================================================
   1. Prototype-Based Inheritance (Constructor Functions)
   ========================================================== */

function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function () {
    console.log(`${this.name} makes a sound.`);
};

function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
    console.log(`${this.name} barks!`);
};

const dog = new Dog("Buddy", "Labrador");

console.log("1. Prototype Inheritance");
dog.speak();
dog.bark();
console.log(dog instanceof Dog);
console.log(dog instanceof Animal);
console.log("\n");

/* ==========================================================
   2. ES6 Class Inheritance
   ========================================================== */

class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }

    start() {
        console.log(`${this.brand} vehicle started.`);
    }
}

class Car extends Vehicle {
    constructor(brand, model) {
        super(brand);
        this.model = model;
    }

    drive() {
        console.log(`${this.brand} ${this.model} is driving.`);
    }
}

const car = new Car("Toyota", "Corolla");

console.log("2. ES6 Class Inheritance");
car.start();
car.drive();
console.log("\n");

/* ==========================================================
   3. Method Overriding
   ========================================================== */

class Employee {
    work() {
        console.log("Employee is working.");
    }
}

class Developer extends Employee {
    work() {
        console.log("Developer is writing code.");
    }
}

const dev = new Developer();

console.log("3. Method Overriding");
dev.work();
console.log("\n");

/* ==========================================================
   4. Using super in Overridden Methods
   ========================================================== */

class Person {
    introduce() {
        console.log("Hello, I am a person.");
    }
}

class Teacher extends Person {
    introduce() {
        super.introduce();
        console.log("I teach JavaScript.");
    }
}

const teacher = new Teacher();

console.log("4. Using super");
teacher.introduce();
console.log("\n");

/* ==========================================================
   5. Object.create() Inheritance
   ========================================================== */

const animalPrototype = {
    eat() {
        console.log(`${this.name} is eating.`);
    }
};

const cat = Object.create(animalPrototype);
cat.name = "Whiskers";

console.log("5. Object.create Inheritance");
cat.eat();
console.log("\n");

/* ==========================================================
   6. Multi-Level Inheritance
   ========================================================== */

class LivingThing {
    breathe() {
        console.log("Breathing...");
    }
}

class Mammal extends LivingThing {
    walk() {
        console.log("Walking...");
    }
}

class Human extends Mammal {
    think() {
        console.log("Thinking...");
    }
}

const human = new Human();

console.log("6. Multi-Level Inheritance");
human.breathe();
human.walk();
human.think();
console.log("\n");

/* ==========================================================
   7. Mixins (Alternative to Multiple Inheritance)
   ========================================================== */

const CanFly = {
    fly() {
        console.log(`${this.name} is flying.`);
    }
};

const CanSwim = {
    swim() {
        console.log(`${this.name} is swimming.`);
    }
};

class Duck {
    constructor(name) {
        this.name = name;
    }
}

Object.assign(Duck.prototype, CanFly, CanSwim);

const duck = new Duck("Donald");

console.log("7. Mixins");
duck.fly();
duck.swim();
console.log("\n");

/* ==========================================================
   8. Static Method Inheritance
   ========================================================== */

class Shape {
    static description() {
        console.log("This is a shape.");
    }
}

class Circle extends Shape {}

console.log("8. Static Method Inheritance");
Circle.description();
console.log("\n");

/* ==========================================================
   9. Checking Prototype Chains
   ========================================================== */

console.log("9. Prototype Chain Checks");

console.log(Object.getPrototypeOf(car) === Car.prototype);
console.log(Object.getPrototypeOf(Car.prototype) === Vehicle.prototype);
console.log(car instanceof Car);
console.log(car instanceof Vehicle);

console.log("\n=== End of Examples ===");