const solution = (x, n) => {
  let positiveN = Math.abs(n);
  let result = x;
  let exponent = 2;

  if (n === 0) {
    result = 1;
  } else {
    while (exponent < positiveN) {
      exponent += exponent;
      result *= result;
    }

    for (let i = 1; i <= positiveN - exponent / 2; i++) {
      result *= x;
    }
  }

  return n > 0 ? result : 1 / result;
};

module.exports = { solution };
