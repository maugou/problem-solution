const solution = (nums) => {
  let max = 1;
  let min = 1;
  let result = -1 * 2 ** 31;

  for (let num of nums) {
    const arr = [num, max * num, min * num];

    min = Math.min(...arr);
    max = Math.max(...arr);

    result = Math.max(result, max);
  }

  return result;
};

module.exports = { solution };
