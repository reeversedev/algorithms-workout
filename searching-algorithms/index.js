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
