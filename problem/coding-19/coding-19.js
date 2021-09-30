const solution = (nums) => {
  let result = "0";

  if (!nums.every((num) => num === 0)) {
    const strArr = nums.map((num) => num.toString());
    strArr.sort((a, b) => Number(b + a) - Number(a + b));

    result = strArr.join("");
  }

  return result;
};

module.exports = { solution };
