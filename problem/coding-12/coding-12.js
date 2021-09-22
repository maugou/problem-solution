const solution = (dividend, divisor) => {
  let result = 0;

  const isNegative =
    (dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0);

  let positiveDividend = dividend < 0 ? -dividend : dividend;
  const positiveDivisor = divisor < 0 ? -divisor : divisor;

  if (positiveDivisor === 1) {
    result = isNegative ? -positiveDividend : positiveDividend;
  } else {
    while (positiveDividend >= positiveDivisor) {
      isNegative ? result-- : result++;
      positiveDividend -= positiveDivisor;
    }
  }

  if (result > 2147483647) {
    return 2147483647;
  }

  return result;
};

module.exports = { solution };
