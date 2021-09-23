const solution = (nums) => {
  const colorCount = { 0: 0, 1: 0, 2: 0 };

  for (let i = 0; i < nums.length; i++) {
    colorCount[nums[i]]++;
  }

  let result = [];
  for (let i = 0; i < 3; i++) {
    result.push(...Array(colorCount[i]).fill(i));
  }

  return result;
};

module.exports = { solution };
