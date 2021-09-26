const solution = (nums) => {
  const result = [];
  const tripletLength = 3;

  if (nums.length >= tripletLength) {
    nums.sort((a, b) => a - b);

    const firstPositiveIndex = nums.findIndex((n) => n > 0);

    if (
      firstPositiveIndex === -1 &&
      nums.filter((n) => n === 0).length >= tripletLength
    ) {
      return [[0, 0, 0]];
    } else {
      for (let i = 0; i < firstPositiveIndex; i++) {
        let start = i + 1;
        let end = nums.length - 1;

        while (start < end && nums[i] !== nums[i - 1]) {
          const sum = nums[i] + nums[start] + nums[end];

          if (sum < 0) {
            start++;
          } else if (sum > 0) {
            end--;
          } else {
            const triplet = [nums[i], nums[start], nums[end]];

            result.push(triplet);

            while (nums[start] === nums[start + 1]) {
              start++;
            }

            while (nums[end] === nums[end - 1]) {
              end--;
            }

            start++;
            end--;
          }
        }
      }
    }
  }

  return result;
};

module.exports = { solution };
