function thirt(n) {
  let arrayReverse = n
    .toString()
    .split("")
    .reverse();
  const arrayRemainders = [1, 10, 9, 12, 3, 4];
  const arrayTimes = [];

  for (let i = 0; i < arrayReverse.length; i++) {
    let sequence = 0;

    if (i % 6 === 0) {
      sequence = 0;
    } else {
      sequence = i % 6;
    }
    console.log(sequence);
  }
}
