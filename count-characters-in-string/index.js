function count(string) {
  let items = {};
  if (string.length < 1) {
    // returing if the string is empty
    return {};
  } else if (string.length > 1) {
    // here the main game starts
    string = string
      .split("")
      .map(item =>
        item in items ? (items[item] = items[item] + 1) : (items[item] = 1)
      );
    return items;
  }
}
