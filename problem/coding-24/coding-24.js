const solution = (nums, k) => {
  nums.sort((a, b) => a - b);

  return nums[nums.length - k];
};

module.exports = { solution };
