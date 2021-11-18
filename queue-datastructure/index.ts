type ItemType = string | number | Symbol;
interface ItemsType {
  [item: number]: ItemType;
}

class Queue {
  items: ItemsType;
  headIndex: number;
  tailIndex: number;
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(item: ItemType) {
    // inserting an item at the tail of Queue
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  dequeue() {
    const dequeuedItem = this.items[this.headIndex];
    // removing the item at head
    delete this.items[this.headIndex];
    // need to update the headIndex
    this.headIndex++;
    return dequeuedItem;
  }

  peek() {
    return this.items[this.headIndex];
  }

  get length() {
    return this.tailIndex - this.headIndex;
  }
}

const queue = new Queue();

queue.enqueue('A');
queue.enqueue('B');
queue.enqueue('C');

console.log(queue.peek());

queue.dequeue();

console.log(queue.peek());
