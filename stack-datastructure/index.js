function Stack() {
  this.count = 0;
  this.storage = {};
}

Stack.prototype.push = value => {
  this.storage[this.count] = value;
  this.count++;
};

Stack.prototype.pop = () => {
  // Check to see if the stack is empty

  if (this.count === 0) {
    return undefined;
  }

  this.count--;
  let result = this.storage[this.count];
  delete this.storage[this.count];
  return result;
};

Stack.prototype.size = () => {
  return this.count;
};
