Array.prototype.mapAlbums = function(callback) {
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this));
  }
  return arr;
};

var logicAlbums = [
  'Bobby Tarantino',
  'The Incredible True Story',
  'Supermarket',
  'Under Pressure'
];

const mapThoseAlbums = logicAlbums.mapAlbums(function(album) {
  return album;
});

console.log(mapThoseAlbums);
// [
//   'Bobby Tarantino',
//   'The Incredible True Story',
//   'Supermarket',
//   'Under Pressure'
// ];

var logicAlbumRatings = [5, 4.5, 4.9, 5];

const squareThoseAlbumRatings = logicAlbumRatings.mapAlbums(function(
  albumRating
) {
  return Math.pow(albumRating, 2);
});

console.log(squareThoseAlbumRatings);
