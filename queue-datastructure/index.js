function Queue(capacity) {
  this._capacity = capacity || Infinity;
  this._storage = {};
  this._head = 0;
  this._tail = 0;
}

Queue.prototype.enqueue = function (value) {
  // If there's a space of adding more items
  if (this.count() < this._capacity) {
    this._storage[this._tail++] = value;
    return this.count();
  }
  return 'Max capacity already reached. Remove element before adding a new one.';
};

Queue.prototype.dequeue = function () {
  let element = this._storage[this._head];
  delete this._storage[this._head];
  if (this._head < this._tail) {
    this._head++;
  }
  return element;
};

Queue.prototype.peek = function () {
  return this._storage[this._head];
};

Queue.prototype.count = function () {
  return this._tail - this._head;
};

Queue.prototype.contains = function (value) {
  for (var i = this._head; i < this._tail; i++) {
    if (this._storage[i] === value) return true;
  }
  return false;
};

Queue.prototype.until = function (value) {
  for (var i = this._head; i < this._tail; i++) {
    if (this._storage[i] === value) return i - this._head + 1;
  }
  return null;
};

// Time complexity:

/*
  *** Exercises:
  1. Implement a queue using two stacks.
  2. Implement a double-ended queue, with the following methods: enqueueLeft, dequeueLeft, enqueueRight, dequeueRight.
  3. Given a tree, print out the value of each node in breadth-first order using a queue data structure.
   */
