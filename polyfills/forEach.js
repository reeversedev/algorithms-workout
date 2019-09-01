Array.prototype.eachColor = function(callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

// we gotta test it now

var arr = ['orange', 'red', 'yellow'];

arr.eachColor(function(word) {
  console.log(word);
  // orange
  // red
  // yellow
});