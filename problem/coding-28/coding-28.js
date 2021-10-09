const solution = (x) => {
  const isNegative = x < 0;
  const positiveX = Math.abs(x);

  const len = positiveX.toString().length;

  let a = 1;
  let b = 10 ** (len - 1);

  let result = 0;

  for (let i = 0; i < len; i++) {
    result += Math.floor((positiveX % (a * 10)) / a) * b;

    a *= 10;
    b /= 10;
  }

  if ((-2) ** 31 > result || result > 2 ** 31 - 1) {
    result = 0;
  }

  return isNegative ? -1 * result : result;
};

module.exports = { solution };

/**
  const solution = (x) => {
    const isNegative = x < 0;
    const positiveX = isNegative ? x * -1 : x;
    const reverseX = Number(positiveX.toString().split("").reverse().join(""));
 
    let result = isNegative ? reverseX * -1 : reverseX;
 
    if (result < (-2) ** 31 || 2 ** 31 - 1 < result) {
      result = 0;
    } 
 
    return result;
  };
 */
