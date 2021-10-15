const solution = (nums) => {
  nums.sort((a, b) => a - b);
  let initSubsets = [[]];
  const subsets = {};

  for (let num of nums) {
    for (let sub of initSubsets) {
      initSubsets = [...initSubsets, [...sub, num]];
      subsets[[...sub, num]] = [...sub, num];
    }
  }

  return [[], ...Object.values(subsets)];
};

module.exports = { solution };
