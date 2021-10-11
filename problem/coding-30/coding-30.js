const solution = (nums, target) => {
  const result = [];
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    const point = Math.floor((start + end) / 2);

    if (nums[point] >= target) {
      end = point;
    } else {
      start = point + 1;
    }
  }

  nums[start] === target ? result.push(start) : result.push(-1);
  start = 0;
  end = nums.length - 1;

  while (start < end) {
    const point = Math.ceil((start + end) / 2);

    if (nums[point] > target) {
      end = point - 1;
    } else {
      start = point;
    }
  }

  nums[end] === target ? result.push(end) : result.push(-1);

  return result;
};

module.exports = { solution };
