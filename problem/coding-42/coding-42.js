const solution = (n) => {
  const array = [0, 1];

  const getFibonacciNumber = (i) => {
    array[i] = (array[i - 2] + array[i - 1]) % 1234567;
  };

  for (let i = 2; i <= n; i++) {
    getFibonacciNumber(i);
  }

  return array[n];
};

module.exports = { solution };
