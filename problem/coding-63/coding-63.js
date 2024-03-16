const solution = (n) => {
  let result = 1;

  while (n > 1) {
    if (n % 2 !== 0) {
      result++;
      n--;
    }

    n = n / 2;
  }

  return result;
};

module.exports = { solution };
