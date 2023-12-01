const solution = (n) => {
  const array = [1, 1];

  const setFibonacciNumber = (i) => {
    array[i] = (array[i - 2] + array[i - 1]) % 1000000007;
  };

  let i = 2;
  while (i <= n) {
    setFibonacciNumber(i);
    i++;
  }

  return array[n];
};

module.exports = { solution };
