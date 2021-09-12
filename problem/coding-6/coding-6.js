const solution = (nums1, nums2) => {
  const concatArr = nums1.concat(nums2);
  concatArr.sort((a, b) => a - b);

  const concatArrLength = concatArr.length;
  const index = Math.floor(concatArrLength / 2);

  let result = (concatArr[index] + concatArr[index - 1]) / 2;

  if (concatArrLength % 2) {
    result = concatArr[index];
  }

  return result;
};

module.exports = { solution };
