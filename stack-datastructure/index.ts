type Value = string | number | object;

function Stack(capacity: number) {
  this.capacity = capacity || Infinity;
  this.count = 0;
  this.storage = {};
}

// O(1)
Stack.prototype.push = function (value: Value) {
  if (this.count < this.capacity) {
    this.storage[this.countcount++] = value;
    return this.count;
  }
  return 'Max capacity already reached. Remove element before adding a new one.';
};

// O(1)
Stack.prototype.pop = function () {
  const value = this.storage[--this.count];
  delete this.storage[this.count];
  if (this.count < 0) {
    this.count = 0;
  }
  return value;
};

Stack.prototype.peek = function () {
  return this.storage[this.count - 1];
};

Stack.prototype.count = function () {
  return this.count;
};
