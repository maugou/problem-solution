const solution = (nums) => {
  let nextScope = 0;

  for (let i = 0; i < nums.length; i++) {
    nextScope = Math.max(i + nums[i], nextScope);

    if (nextScope >= nums.length - 1) {
      return true;
    } else if (i === nextScope && nums[nextScope] === 0) {
      return false;
    }
  }

  return false;
};

module.exports = { solution };
