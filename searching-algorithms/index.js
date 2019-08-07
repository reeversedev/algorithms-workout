// linearSearch Algorithm
// find() in an array uses linear Search Approach.
// This is suitable for simpler and smaller collection
function linearSearch(value, list) {
  let found = false;
  let index = -1;
  let position = 0;

  while (!found && index < list.length) {
    if (list[index] == value) {
      found = true;
      position = index;
    } else {
      index++;
    }
  }
  return position;
}

// binarySearch Algorithm
// can be used for large Arrays because getting a result with this is much faster

function binarySearch(value, list) {
  let first = 0;
  let last = list.length - 1;
  let found = false;
  let position = -1;
  let middle;

  while (found === false && first <= last) {
    middle = Math.floor((first + last) / 2);

    if (list[middle] == value) {
      position = middle;
      found = true;
    } else if (list[middle] > value) {
      // comes in lower area
      last = middle - 1;
    } else {
      first = middle + 1;
    }
  }
  return position;
}
