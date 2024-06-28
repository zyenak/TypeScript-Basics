// Define the generic Stack class
class Stack<T> {
    private items: T[]; 

    constructor() {
        this.items = [];
    }

    // Methods
    push(item: T): void {
        this.items.push(item);      //can also use unshift
    }

    pop(): T | undefined {
        return this.items.pop();        //can also use shift
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }
}


// Test
const stack = new Stack<number>();

// Push numbers onto the stack
stack.push(10);
stack.push(20);
stack.push(30);

console.log(`Size of stack: ${stack.size()}`); 
console.log(`Top item: ${stack.peek()}`);
console.log(`Popped item: ${stack.pop()}`); 
console.log(`Is stack empty? ${stack.isEmpty()}`); 


console.log();

// Test some other stack type
const stringStack = new Stack<string>();
stringStack.push("Hello");
stringStack.push("World");


console.log(`Size of string stack: ${stringStack.size()}`); 
console.log(`Top item: ${stringStack.peek()}`); 
console.log(`Popped item: ${stringStack.pop()}`);
console.log(`Is stack empty? ${stringStack.isEmpty()}`); 