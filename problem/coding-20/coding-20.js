const solution = (temperatures) => {
  const length = temperatures.length;
  const result = Array(length).fill(0);

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (temperatures[i] < temperatures[j]) {
        result[i] = j - i;
        break;
      }
    }
  }

  return result;
};

module.exports = { solution };
