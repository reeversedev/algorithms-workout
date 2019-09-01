Array.prototype.eacheachAlbum = function(callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

// we gotta test it now

var logicAlbums = [
  'Bobby Tarantino',
  'The Incredible True Story',
  'Supermarket',
  'Under Pressure'
];

logicAlbums.eacheachAlbum(function(word) {
  console.log(word);
  // Bobby Tarantino,
  // The Incredible True Story,
  // Supermarket,
  // Under Pressure;
});
