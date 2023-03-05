const solution = (nums) => {
  const uniqNums = [];

  nums.forEach((num) => {
    const res = uniqNums.findIndex((value) => value === num);

    if (res === -1) {
      uniqNums.push(num);
    }
  });

  const halfNumsLength = nums.length / 2;

  return uniqNums.length < halfNumsLength ? uniqNums.length : halfNumsLength;
};

module.exports = { solution };
