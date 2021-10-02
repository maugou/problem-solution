const solution = (nums, k) => {
  const countNum = nums.reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur]++;
    } else {
      acc[cur] = 1;
    }

    return acc;
  }, {});

  const countNumArr = Object.entries(countNum);
  countNumArr.sort((a, b) => b[1] - a[1]);

  return countNumArr.map((arr) => Number(arr[0])).slice(0, k);
};

module.exports = { solution };
