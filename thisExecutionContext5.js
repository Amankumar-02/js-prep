// this depends on how function is called.

// global
console.log(this); // browser window

// Object Method
const obj = {
   name: "John",
   greet() {
      console.log(this.name);
   }
};

obj.greet();

// Regular function
function test() {
   console.log(this);
}
test();

// Arrow Function ==> Arrow functions do not have their own this.
const obj2 = {
   name: "Sam",
   show: () => {
      console.log(this);
   }
};
console.log(   
    obj2.show()
);
