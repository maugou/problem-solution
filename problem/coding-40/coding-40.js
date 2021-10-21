const solution = (nums) => {
  return nums.map((num, idx, arr) => {
    const newNums = [...arr.slice(idx, arr.length), ...arr.slice(0, idx)];
    const resultIdx = newNums.findIndex((newNum) => newNum > num);

    return resultIdx > 0 ? newNums[resultIdx] : resultIdx;
  });
};

module.exports = { solution };
