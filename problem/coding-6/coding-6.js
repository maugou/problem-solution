const solution1 = (nums1, nums2) => {
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

const solution2 = (nums1, nums2) => {
  const length = nums1.length + nums2.length;
  const midIndex = Math.floor(length / 2);
  let newArr = [];

  let i1 = 0;
  let i2 = 0;
  for (let i = 0; i <= midIndex; i++) {
    if (i1 < nums1.length && i2 < nums2.length) {
      if (nums1[i1] < nums2[i2]) {
        newArr[i] = nums1[i1];
        i1++;
      } else {
        newArr[i] = nums2[i2];
        i2++;
      }
    } else if (i1 === nums1.length) {
      newArr[i] = nums2[i2];
      i2++;
    } else {
      newArr[i] = nums1[i1];
      i1++;
    }
  }

  return length % 2
    ? newArr[midIndex]
    : (newArr[midIndex] + newArr[midIndex - 1]) / 2;
};

module.exports = { solution1, solution2 };
