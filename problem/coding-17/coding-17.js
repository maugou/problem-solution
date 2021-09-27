const solution = (nums) => {
  let result = [[]];

  for (let num of nums) {
    for (let sub of result) {
      result = [...result, [...sub, num]];
    }
  }

  return result;
};

module.exports = { solution };
