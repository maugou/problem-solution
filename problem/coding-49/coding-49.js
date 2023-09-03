const solution = (n) => {
  const memorization = {};

  const getFibonacciNumber = (m) => {
    if (m < 2) {
      return m;
    }

    const currentNumber =
      memorization[m] ??
      (getFibonacciNumber(m - 2) + getFibonacciNumber(m - 1)) % 1234567;

    memorization[m] = currentNumber;
    return currentNumber;
  };

  return getFibonacciNumber(n + 1);
};

module.exports = { solution };
