const solution = (nums) => {
  let result = 0;
  let position = 0;
  let nextScope = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    nextScope = Math.max(i + nums[i], nextScope);

    if (nextScope >= nums.length - 1) {
      result++;
      break;
    } else if (i === position) {
      result++;
      position = nextScope;
    }
  }

  return result;
};

module.exports = { solution };
