type PopMethodType = string | number | undefined;

class Stack {
  items: Array<number | string>;
  count: number;
  constructor() {
    this.items = [];
    this.count = 0;
  }

  // Add element to top of stack
  push(element: number | string) {
    this.items[this.count] = element;
    console.log(`${element} added to ${this.count}`);
    this.count++;
    return this.count - 1;
  }

  // Return and remove top element in stack
  // Return undefined if stack is empty

  pop(): PopMethodType {
    if (this.count === 0) return undefined;

    /* although the count is 1 but our stack is 0th based
     that's why we need to reduce it by 1 to get the correct position */

    let deletedItem = this.items[this.count - 1];
    console.log(`${deletedItem} removed`);
    this.count--;
    return deletedItem;
  }

  // Check top element in stack
  peek() {
    console.log(`Top element is ${this.items[this.count - 1]}`);
    return this.items[this.count - 1];
  }

  // check if stack is empty
  isEmpty() {
    console.log(this.count === 0 ? 'Stack is empty' : 'Stack is not empty');
    return this.count === 0;
  }

  // Check size of stack
  size() {
    console.log(`Size of stack is: ${this.count}`);
    return this.count;
  }

  // Print elements in stack
  print() {
    let str = '';
    for (let i = 0; i < this.count; i++) {
      str += this.items[i] + ' ';
    }
    return str;
  }
}

const stack = new Stack();

stack.isEmpty();

stack.push(100);
stack.push(200);

stack.peek();
stack.push(300);

console.log(stack.print());

stack.peek();

stack.pop();
stack.pop();

console.log(stack.print());

stack.isEmpty();
