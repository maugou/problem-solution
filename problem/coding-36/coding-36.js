const solution = (nums, k) => {
  const newK = nums.length > k ? k : k % nums.length;
  const copyNums = [...nums];
  nums.splice(0, nums.length - newK);
  nums.push(...copyNums.slice(0, copyNums.length - newK));

  return nums;
};

module.exports = { solution };
