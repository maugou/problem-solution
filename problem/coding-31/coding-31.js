const solution = (nums, target) => {
  nums.sort((a, b) => a - b);

  let result;
  let value;

  for (let i = 0; i < nums.length; i++) {
    let start = i + 1;
    let end = nums.length - 1;

    while (start < end) {
      const sum = nums[i] + nums[start] + nums[end];

      if (sum === target) {
        return sum;
      } else {
        const distance = sum > target ? sum - target : target - sum;

        const compareValue =
          value !== undefined ? Math.min(distance, value) : distance;

        if (value !== compareValue) {
          result = sum;
          value = compareValue;
        }

        if (sum < target) {
          start++;
        } else {
          end--;
        }
      }
    }
  }

  return result;
};

module.exports = { solution };
