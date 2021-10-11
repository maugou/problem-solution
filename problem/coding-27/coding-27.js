const solution = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;

  nums.sort((a, b) => a - b);

  while (start <= end) {
    let point = Math.floor((start + end) / 2);

    if (nums[point] === target) {
      return true;
    } else if (nums[start] < target) {
      start++;
    } else {
      end--;
    }
  }

  return false;
};

module.exports = { solution };
