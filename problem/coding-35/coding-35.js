const solution = (nums) => {
  const result = nums.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;

    if (acc[num] === 3) {
      delete acc[num];
    }

    return acc;
  }, {});

  return Number(Object.keys(result)[0]);
};

module.exports = { solution };
