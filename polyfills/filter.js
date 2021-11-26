Array.prototype.filterAlbums = function(callback, context) {
  let arr = [];
  for (var i = 0; i < this.length; i++) {
    if (callback.call(context, this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};

var logicAlbums = [
  {
    name: 'Bobby Tarantino',
    rating: 5
  },
  { name: 'The Incredible True Story', rating: 4.5 },
  {
    name: 'Supermarket',
    rating: 4.9
  },
  { name: 'Under Pressure', rating: 5 }
];

logicAlbums.filterAlbums(function(album) {
  return album.rating > 4.9;
});
console.log(logicAlbums);

// [
//   { name: 'Bobby Tarantino', rating: 5 },
//   { name: 'The Incredible True Story', rating: 4.5 },
//   { name: 'Supermarket', rating: 4.9 },
//   { name: 'Under Pressure', rating: 5 }
// ];
