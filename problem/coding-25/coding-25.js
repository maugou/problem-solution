const solution = (nums) => {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    const point = Math.floor((start + end) / 2);

    if (nums[point] > nums[end]) {
      start = point + 1;
    } else {
      end = point;
    }
  }

  return nums[start];
};

module.exports = { solution };
