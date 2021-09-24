const solution1 = (matrix, target) => {
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][matrix[i].length - 1] >= target) {
      return matrix[i].includes(target);
    }
  }

  return false;
};

module.exports = { solution1 };
