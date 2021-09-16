const solution = (s, numRows) => {
  if (numRows === 1) {
    return s;
  }

  let result = Array(numRows).fill("");

  for (let i = 0; i < s.length; i++) {
    const index = i % ((numRows - 1) * 2);

    if (index < numRows) {
      result[index] += s[i];
    } else {
      result[(numRows - 1) * 2 - index] += s[i];
    }
  }

  return result.join("");
};

module.exports = { solution };
