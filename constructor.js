class Stack {
    constructor() {
        // Initialize your stack
        this.stack = [];
    }

    push(element) {
        // Add element to the top
        this.stack.push(element);
        return this.stack.length;
    }

    pop() {
        // Remove and return top element
        return this.stack.pop();
    }

    peek() {
        // Return top element without removing
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        // Check if stack is empty
        return this.stack.length === 0;
    }

    size() {
        // Return number of elements
        return this.stack.length;
    }

    clear() {
        // Remove all elements
        this.stack = [];
        return this.stack;   
    }
}
const stack = new Stack();
console.log(stack.isEmpty()); // true
console.log(stack.push(10)); // 1
console.log(stack.push(20)); // 2
console.log(stack.push(30)); // 3
console.log(stack.size()); // 3
console.log(stack.peek()); // 30
console.log(stack.pop()); // 30
console.log(stack.peek()); // 20
console.log(stack.clear()); // 
console.log(stack.isEmpty()); // true

// module.exports = Stack;