const solution = (nums) => {
  let sumArr = [];
  sumArr[0] = 0;
  sumArr[1] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    sumArr[i + 1] = Math.max(sumArr[i], sumArr[i - 1] + nums[i]);
  }

  return sumArr[sumArr.length - 1];
};

module.exports = { solution };
