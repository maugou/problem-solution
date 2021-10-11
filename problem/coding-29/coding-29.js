const solution = (nums) => {
  const lastIdx = nums.length - 1;
  let isDescending = true;
  let point = 0;

  for (let i = lastIdx; i >= 0; i--) {
    if (!isDescending) {
      break;
    } else if (nums[i] > nums[i - 1]) {
      for (let j = lastIdx; j >= i - 1; j--) {
        if (nums[j] > nums[i - 1]) {
          [nums[j], nums[i - 1]] = [nums[i - 1], nums[j]];
          isDescending = false;
          point = i;
          break;
        }
      }
    }
  }

  if (isDescending) {
    nums.sort((a, b) => a - b);
  } else {
    for (let i = point; i <= lastIdx; i++) {
      for (let j = i + 1; j <= lastIdx; j++) {
        if (nums[i] > nums[j]) {
          [nums[i], nums[j]] = [nums[j], nums[i]];
        }
      }
    }
  }

  return nums;
};

module.exports = { solution };
