function computeFactorial(num: number): number {
  if (num <= 1) {
    return 1;
  } else {
    return num * computeFactorial(num - 1);
  }
}

computeFactorial(6);
