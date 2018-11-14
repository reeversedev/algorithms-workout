function thirt(n) {
  // Declaring the array with the given numbers to be multiplied with
  const nums = [1, 10, 9, 12, 3, 4];

  let sum = ("" + n) // Converting it into string
    .split("") // Spliting, it becomes ['1', '10' ..]
    .reverse() // Reversing the whole array
    .reduce((sum, v, i) => sum + v * nums[i % nums.length], 0);
  return sum === n ? n : thirt(sum);
}
