function thirt(n) {
  n = n
    .toString()
    .split("")
    .reverse();
  const arrayRemainders = [1, 10, 9, 12, 3, 4];

  for (let i = 0; i < n.length; i++) {
    let sequence = 0;

    if (i % 6 === 0) {
      sequence = 0;
      console.log("divided by 6", sequence);
    } else {
      sequence = i % 6;
      console.log("sequence", sequence, "number", i);
    }
  }
}
