Array.prototype.everyEach = function(callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

// we gotta test it now

var arr = ['orange', 'red', 'yellow'];

arr.everyEach(function(word) {
  console.log(word);
  // orange
  // red
  // yellow
});
